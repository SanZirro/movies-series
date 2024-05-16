import Card from './Card'

function Movies(props) {
    return (
        <div className="movies">
            {props.movies.length ? (
                props.movies.map(movie => 
                    <Card
                        key={movie.imdbID}
                        readMoreHandler={props.readMoreHandler}
                        {...movie}
                    />
                )
            ) : (
                <p1 className='error'>
                    <a9>Not found</a9>
                </p1>
            )}
        </div>
    );
}

export default Movies;