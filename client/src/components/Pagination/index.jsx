import './pagination.css'
export const Pagination = ({pages, paginate, prevPage, nextPage}) => {
    const pageNumber = []
    for (let i = 1; i <= pages; i++) {
        pageNumber.push(i);
     }
    return(
        <main className='pagination'>
            <button className='prevButton' onClick={prevPage}>Previous</button>
            <ul className="pages">
            {
                pageNumber.map(page => (
                    <li key={page}>
                        <button className='pagesButton' onClick={()=>paginate(page)}>{page}</button>
                    </li>
                ))
              }
            </ul>
             
            <button className='nextButton' onClick={nextPage}>Next</button>
        </main>
    )
}