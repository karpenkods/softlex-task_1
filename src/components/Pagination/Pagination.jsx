import './Pagination.scss'

export const getPagesArray = (totalPages) => {
  let result = []
  for (let i = 0; i < totalPages; i++) {
    result.push(i + 1)
  }
  return result
}

const Pagination = ({ totalPages, page, setPage }) => {
  const pages = getPagesArray(totalPages)

  return (
    <div className="pagination">
      {pages.map((p) => (
        <label
          key={p}
          className={`${'pagination__btn'}  ${
            p === page ? 'pagination__checked' : ''
          }`}
          tabIndex="0"
        >
          <input
            name="pagination"
            type="radio"
            className="pagination__radio"
            onChange={() => setPage(p)}
            value={p}
          />
          <span>{p}</span>
        </label>
      ))}
    </div>
  )
}

export default Pagination
