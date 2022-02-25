import Blog from '../models/blog';

export const createBlog = async (req,res) => {
    const { content, author } = req.body;
    if(!content.length) {
        return res.json({
            error: "You need to write something..."
        });
    }
    try{
        const blog = new Blog({content, author});
        await blog.save();
        res.json(blog);

    } catch (err) {
        console.log(err)
        res.sendStatus(400)
    }
};

export const getBlogs = async (req,res) => {
    try {
        const blogs = await Blog.find(req.params._id)
        .populate()
        .sort({createdAt: -1});
        res.json(blogs)
    } catch(err) {
        console.log(err)
    }
};

export const getBlog = async (req,res) => {
    try {
        const blogs = await Blog.findById(req.params._id)
        .populate()
        res.json(blogs)
    } catch(err) {
        console.log(err)
    }
};

export const editBlog = async (req, res) => {
    try{
        const blog = await Blog.findByIdAndUpdate(req.params._id, req.body, {
            new: true
        });
        res.json(blog)
    } catch(err) {
        console.log(err)
    }
};

export const deleteBlog = async (req, res) => {
    try{
        const blog = await Blog.findByIdAndDelete(req.params._id);
        res.json({ok:true});
    } catch (err) {
        console.log(err)
    }
};