import { Button, TableBody, TableCell, TableHead, TableRow } from '@mui/material'
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
          <TableBody>
            <TableRow>

              <TableCell>Music</TableCell>
              
            </TableRow>
          </TableBody>
        </Table>
    </div>
    
  )

}

export default Categories