
import PropTypes from 'prop-Types';
const Blog = ({blog}) => {
    console.log(blog);
    return (
        <div>
            <h4>Single blog</h4>
        </div>
    );
};
Blog.propType = {
blog: PropTypes.object.isRequired
}
export default Blog;