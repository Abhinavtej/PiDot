import React from "react";
import Pagination from '@mui/material/Pagination';

const PaginationLink = ({
    totalPosts,
    postsPerPage,
    setCurrentPage,
    currentPage,
}) => {
    let pages = [];

    for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
        pages.push(i);
    }

    return (
        <div className='pagination' style={{ display: 'flex', justifyContent: 'center', marginTop: '3em', color: 'white'}}>
            <Pagination
                count={Math.ceil(totalPosts / postsPerPage)}
                shape="rounded"
                color='primary'
                page={currentPage}
                onChange={(event, page) => setCurrentPage(page)}
            />
        </div>
    );
};

export default PaginationLink;
