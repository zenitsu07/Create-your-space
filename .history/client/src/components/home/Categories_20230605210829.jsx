import { Button, TableHead } from '@mui/material'
import React from 'react'

const Categories = () => {

  return (

    <div>
        <Button>Create blog</Button>

        <Table>
          <TableHead>
            <TableRow>
              <TableCell>
              All Categories
              </TableCell>

            </TableRow>
          </TableHead>
        </Table>
    </div>
    
  )

}

export default Categories