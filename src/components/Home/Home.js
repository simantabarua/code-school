import React, { useContext } from 'react';
import { Container, Row } from 'react-bootstrap';
import { userContext } from '../../App';
import Banner from '../Banner/Banner';
import Category from '../Category/Category';
import Courses from '../Courses/Courses';
import SingleCourse from '../SingleCourse/SingleCourse';



const Home = () => {
    const [courses, setCourses] = useContext(userContext);

    let slicedCourse = courses.slice(0, 6)


    return (
        <div>
            <Banner></Banner>
            <Category></Category>
            <Container className="my-5">
                <Row xs={1} md={3} sm={2} className="g-3 m-3">
                    {
                        slicedCourse.map(course => <SingleCourse
                            key={course.key}
                            course={course} ></SingleCourse>)
                    }
                </Row>
            </Container>

        </div>
    );
};

export default Home;