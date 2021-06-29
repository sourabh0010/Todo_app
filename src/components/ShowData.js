import React, { useEffect, useState } from 'react'
import InfiniteScroll from 'react-infinite-scroll-component';

import axios from 'axios'
import './App.css';

const style = {
    height: 30,
    border: "1px solid green",
    margin: 6,
    padding: 8
};

function App() {
    const [page, setPage] = useState(4);
    const [data, setData] = useState([])
    const [hasMore, setHasMore] = useState(true)
    useEffect(() => {
        setTimeout(()=>{

        })
    }, [page])


    const FetchData = () => {
        setPage(page + 1);
    }

    return (
        <div className="App" id="scrollableDiv"
        // style={{ height: 300, overflow: "auto" }}
        >

            <InfiniteScroll
                dataLength={data.length}
                next={FetchData}
                hasMore={hasMore}
                loader={<h4>Loading...</h4>}
                endMessage={
                    <p style={{ textAlign: "center" }}>
                        <b>Yay! You have seen it all</b>
                    </p>
                }
            >
                {data.map((i) => (
                    <div style={style} key={i.id}>
                        {i?.title}
                    </div>
                ))}
            </InfiniteScroll>
        </div>
    );
}

export default App;
