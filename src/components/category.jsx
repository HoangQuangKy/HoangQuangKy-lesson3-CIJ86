import React from 'react'
import SortFilter from '/bars-filter.svg';
import './category.css'
function Category() {
    return (
        <div className='categoryContainer'>
            <div className='imgSort'>
                <img src={SortFilter} alt="" style={{ objectFit: `contain`, maxWidth: `15px` }} />
                <div>Bộ lọc</div>
            </div>
            <div className='imgSort'>Thương hiệu</div>
            <div className='imgSort'>Giá bán</div>
            <div className='imgSort'>Màn hình</div>
            <div className='imgSort'>Camera sau</div>
            <div className='imgSort'>RAM</div>
            <div className='imgSort'>Bộ nhớ trong</div>

        </div>

    )
}

export default Category
