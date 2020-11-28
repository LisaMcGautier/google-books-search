import React from "react";

export function Card({ children }) {
    // return <li className="list-group-item">{children}</li>;

    return (
    <Row>
        <Col size="md-12">
            {/* <Col size="md-10 md-offset-1"> */}
    
            <div className="card m-3 p-3">
                <Row>
                    <Col size="md-6">
                        {/* <h5 className="card-title">Card title</h5> */}
                        <h4 className="card-title">BOOK title</h4>
                        <h6 className="card-title">book subtitle</h6>
                        <h5 className="card-title">Author name(s)</h5>
                    </Col>
    
                    <Col size="md-6">
                        <button style={{ float: "right", marginBottom: 10 }} className="btn btn-primary shadow m-3">View</button>
                        <button style={{ float: "right", marginBottom: 10 }} className="btn btn-success shadow m-3">Save</button>
                    </Col>
                </Row>
    
                {/* <div className="card mb-3" style={{ maxWidth: "540px" }}> */}
                <div className="row no-gutters">
                    <div className="col-md-1 m-3">
                        {/* <div className="col-md-1"> */}
                        <img src="http://books.google.com/books/content?id=6TyCDwAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api" className="card-img" alt="test" />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
    
                            {/* <h5 className="card-title">Card title</h5> */}
                            {/* <button className="btn btn-warning shadow m-3">View</button>
                            <button className="btn btn-primary shadow m-3">Save</button> */}
    
                            {/* <button style={{ float: "right", marginBottom: 10 }} className="btn btn-warning shadow m-3">View</button>
                            <button style={{ float: "right", marginBottom: 10 }} className="btn btn-primary shadow m-3">Save</button> */}
    
                            <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                            <p>Lorem impsum It beggared all description.  more in sorrow than in anger.  He has eaten me out of house and home.  Let me love him for that; and do you love him because I do. Look, here comes the Duke. The sixth age shifts Into the lean and slipper'd pantaloon, With spectacles on nose and pouch on side, His youthful hose, well sav'd, a world too wide For his shrunk shank; and his big manly voice, Turning again toward childish treble, pipes And whistles in his sound.  But look to it: Find out thy brother wheresoe'er he is; Seek him with candle; bring him dead or living Within this twelvemonth, or turn thou no more To seek a living in our territory.   Sir, I am a true labourer: I earn that I eat, get that I wear; owe no man hate, envy no man's happiness; glad of other men's good, content with my harm; and the greatest of my pride is to see my ewes graze and my lambs.</p>
                            {/* <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p> */}
                        </div>
                    </div>
                </div>
            </div>
            )
  }

<Row>
    <Col size="md-12">
        {/* <Col size="md-10 md-offset-1"> */}

        <div className="card m-3 p-3">
            <Row>
                <Col size="md-6">
                    {/* <h5 className="card-title">Card title</h5> */}
                    <h4 className="card-title">BOOK title</h4>
                    <h6 className="card-title">book subtitle</h6>
                    <h5 className="card-title">Author name(s)</h5>
                </Col>

                <Col size="md-6">
                    <button style={{ float: "right", marginBottom: 10 }} className="btn btn-primary shadow m-3">View</button>
                    <button style={{ float: "right", marginBottom: 10 }} className="btn btn-success shadow m-3">Save</button>
                </Col>
            </Row>

            {/* <div className="card mb-3" style={{ maxWidth: "540px" }}> */}
            <div className="row no-gutters">
                <div className="col-md-1 m-3">
                    {/* <div className="col-md-1"> */}
                    <img src="http://books.google.com/books/content?id=6TyCDwAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api" className="card-img" alt="test" />
                </div>
                <div className="col-md-8">
                    <div className="card-body">

                        {/* <h5 className="card-title">Card title</h5> */}
                        {/* <button className="btn btn-warning shadow m-3">View</button>
                        <button className="btn btn-primary shadow m-3">Save</button> */}

                        {/* <button style={{ float: "right", marginBottom: 10 }} className="btn btn-warning shadow m-3">View</button>
                        <button style={{ float: "right", marginBottom: 10 }} className="btn btn-primary shadow m-3">Save</button> */}

                        <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                        <p>Lorem impsum It beggared all description.  more in sorrow than in anger.  He has eaten me out of house and home.  Let me love him for that; and do you love him because I do. Look, here comes the Duke. The sixth age shifts Into the lean and slipper'd pantaloon, With spectacles on nose and pouch on side, His youthful hose, well sav'd, a world too wide For his shrunk shank; and his big manly voice, Turning again toward childish treble, pipes And whistles in his sound.  But look to it: Find out thy brother wheresoe'er he is; Seek him with candle; bring him dead or living Within this twelvemonth, or turn thou no more To seek a living in our territory.   Sir, I am a true labourer: I earn that I eat, get that I wear; owe no man hate, envy no man's happiness; glad of other men's good, content with my harm; and the greatest of my pride is to see my ewes graze and my lambs.</p>
                        {/* <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p> */}
                    </div>
                </div>
            </div>
        </div>