import { observer } from 'mobx-react';
import * as React from 'react';

import { IMenuItem } from '../../services';

import { MenuItem } from './MenuItem';
import Collapse from '@material-ui/core/Collapse';
import List from '@material-ui/core/List';

export interface MenuItemsProps {
  items: IMenuItem[];
  expanded?: boolean;
  onActivate?: (item: IMenuItem) => void;
  style?: React.CSSProperties;
  root?: boolean;

  className?: string;
}

@observer
export class MenuItems extends React.Component<MenuItemsProps> {
  render() {
    const { items, root, className } = this.props;
    const expanded = this.props.expanded == null ? true : this.props.expanded;
    return (
      <List
        className={className}
        style={this.props.style}
        disablePadding
        {...(root ? { role: 'navigation' } : {})}
      >
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          {items.map((item, idx) => (
            <MenuItem key={idx} item={item} onActivate={this.props.onActivate} />
          ))}
        </Collapse>
      </List>
    );
  }
}
