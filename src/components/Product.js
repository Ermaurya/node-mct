import React from 'react'
import { Link } from 'react-router-dom'
const Product = () => {
  return (
    <div>
      {/* <h1>hjdhfdjffdmd  jkd b h </h1> */}
      <div className='main-product-card'>
        <div className='card'>
          <div className='left-side'>
            <ul>
                

                <li><Link to='/'> electronic</Link></li>
                <li><Link to='/ele2'> electronic</Link></li>
                <li><Link to='/ele3'> electronic</Link></li>
                <li><Link to='/ele4'> electronic</Link></li>
                <li><Link to='/ele5'> electronic</Link></li>
               
            
            </ul>
          </div>
          <div className='right-side'>
            {/* <table>
              

                <td>hdjhfjdh  jdkvhfd dcdbuckd xhm cslkj jd m h mndjcb j   ;dm vkdkv  jv nv; nvvjdib  ..ke   hudd f ef </td>
                <td>hdjhfjdh</td>
                <td>hdjhfjdh</td>
                <td>hdjhfjdh</td>
                <td>hdjhfjdh</td>
             
            </table> */}
            <ul>
                <li> jkcdhck jdhcn</li>
                <li>cscscsxaxcw am,haax smch s  hshq </li>
                <li>cscscsxaxcw am,haax smch s  hshq </li>
                <li>cscscsxaxcw am,haax smch s  hshq </li>
                <li>cscscsxaxcw am,haax smch s  hshq </li>
                <li>cscscsxaxcw am,haax smch s  hshq </li>
               
            </ul>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Product
