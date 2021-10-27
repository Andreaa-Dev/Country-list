import React from 'react'
import List from '@material-ui/core/List'
import ListItemText from '@material-ui/core/ListItemText'
import { ColumnType, LanguageType } from './types'
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord'

export const columns: ColumnType[] = [
  {
    id: 'flag',
    label: 'Flag',
    minWidth: 170,
    format: (value) => (
      <img src={value as string} width="80px" height="50px" alt="error" />
    ),
    // sortable: false,
  },
  { id: 'name', label: 'Name', minWidth: 100 },
  {
    id: 'region',
    label: 'Region',
    minWidth: 170,
    align: 'right',
  },
  {
    id: 'population',
    label: 'Population',
    minWidth: 170,
    align: 'right',
  },
  {
    id: 'languages',
    label: 'Languages',
    minWidth: 170,
    align: 'right',
    format: (value) => (
      <List>
        {(value as LanguageType[]).map((item: any) => (
          <ListItemText>
            <FiberManualRecordIcon />
            {item.name}
          </ListItemText>
        ))}
      </List>
    ),
  },
  {
    id: 'others',
    label: 'Favorite',
    minWidth: 170,
    align: 'right',
    sortable: false,
  },
  {
    id: 'details',
    label: '',
    minWidth: 170,
    align: 'right',
    sortable: false,
  },
]
