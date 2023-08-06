import { Button, Table , TableBody, TableCell, TableHead, TableRow, styled } from '@mui/material'
import {categories}  from '../../constants/data.js'
import {Link, useSearchParams} from 'react-router-dom'

import React from 'react'


const StyledTable = styled(Table)`
    border: 1px solid rgba(224, 224, 224, 1);
`;

const StyledButton = styled(Button)`
    margin: 20px;
    width: 85%;
    background: #6495ED;
    color: #fff;
    text-decoration: none;
`;
    
const StyledLink = styled(Link)`
    text-decoration: none;
    color: inherit;
`;
//searchparams to get params fromurl

const Categories = () => {


  const [searchParams] = useSearchParams();
  
  const category = searchParams.get('category');

  return (

    <>
      {/* Lunked to categ ory page redirect so from url of image we can extract the category of the image*/}
      {/* append category to url */}
        <Link to={`/create?category=${category }} ''}`} style={{ textDecoration: 'none' }}>
                <StyledButton variant="contained">Create Blog</StyledButton>
            </Link>
        <Table>
          <TableHead>
            <TableRow>  
              <TableCell>

              All Categories

              </TableCell>

            </TableRow>
          </TableHead>
          <TableBody>
           {
            categories.map( category => {
              return(
                <TableRow key = { category.id }>

                  <TableCell>

                      <StyledLink to={`{craete/?category=${category.type}`}>
                        {category.type}
                      </StyledLink>
                    
                    </TableCell>

              </TableRow>
              )
            })
           }
          </TableBody>
        </Table>
    </>
    
  )

}

export default Categories