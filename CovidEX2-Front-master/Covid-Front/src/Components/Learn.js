import './table.css';
export default function Learn() {
    return (
        <>
            <header className="mt-3">
            <div className="h1 text-center">Learning Journey</div>       
            </header>
            <main>
                <div className="row t">
                <div className="container-fluid my-4">
                        <div className="col-6">
                              <h5>
                                My learning journey including previous knowledge & what are the resources (YouTube, Tutorials, installations,etc) I've used for
                                learning.
                            </h5>
                            <p>This is the list of the main resources i have used.<br/>
                             ps: click on the button for going to video on YouTube</p>
                        </div>
                    </div>
                    <div>
                        <div className="col-6">
                            <h3>Learning React:</h3>
                            <p>
                         I had a basic knowledge in react from web development course,Also i've learned more about it from youtube videos.
                            </p>
                            <div>
                                <p>
                                  These courses explain react:
                                </p>
                                <div className="col">
                                    <a href="https://www.youtube.com/watch?v=QFaFIcGhPoM&list=PLC3y8-rFHvwgg3vaYJgHGnModB54rxOk3" className="btn btn-primary">ReactJS Tutorial for Beginners </a>
                                </div>
                                <div className="col my-3">
                                    <a href="https://www.youtube.com/watch?v=_uQrJ0TkZlc&t=11082s" className="btn btn-primary">React JS - React Tutorial for Beginners</a>
                                    </div>
                            </div>
                        </div>
                    </div>
                    <div className=" mt-3">
                        <div className="col-6">
                            <h3>Learning Django:</h3>
                            <p>
                                I dont know django before,so i learnt from videos on youtube  & got all the knowledge which i need to do this task
                                ,Also used the "Django documentation" website to learn more.
                            </p>
                            <div>
                           <p>
                            <a href="https://docs.djangoproject.com/en/4.0/" className="btn btn-primary">Django documentation</a>
                          </p>
                            </div>
                            <p>Course that help beginners understanding Django</p>
                                    <div className="col-6">
                                <a href="https://www.youtube.com/watch?v=qgGIqRFvFFk&list=PL6gx4Cwl9DGBlmzzFcLgDhKTTfNLfX1IK" className="btn btn-primary">Django Tutorial for Beginners</a>
                            </div> 
                            <div className="col-6 my-4">
                                <a href=" https://youtu.be/F5mRW0jo-U4" className="btn btn-primary">Python Django Web Framework - Full Course for Beginners</a>
                            </div> 
                           
                        </div>
                    </div>
                <div className="mt-4">
                    <div className="col-6">
                        <h3>Learning postgresql:</h3>
                        <div className="col">
                                <a href="https://www.youtube.com/watch?v=Pwwz4_AvHDU" className="btn btn-primary">Python Django + PostgreSQL</a>
                        </div>
                        </div></div>
                    <div className="mt-4">
                        <div className="col-6">
                            <h3>Stack Overflow:</h3>
                            <div className="col">
                                <a href="https://stackoverflow.com/" className="btn btn-primary">When I Stuck in anything</a>
                            </div>
                        </div></div>
                    
                    </div>
            </main>
        </>
    );
}
