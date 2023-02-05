
export const LoadingQuote = () => {

    return(
        <div>

            <blockquote className="blockquote text-end">
                <p className="mb-1"> { quote } </p>
                <footer className="blockquote-footer"> { author } </footer>
            </blockquote>
            <hr />
            <blockquote className="blockquote text-center">
                <p className="mb-1"> { name } </p>
                <footer className="blockquote-footer"> { species } </footer>
            </blockquote>
        </div>
    )
}