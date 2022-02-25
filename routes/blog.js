import express from 'express';

const router = express.Router();

//controllers
import {createBlog, getBlogs, getBlog, editBlog, deleteBlog} from '../controllers/blog';

router.post('/create-blog', createBlog); 

router.get('/get-blogs', getBlogs);

router.get('/get-blog/:_id', getBlog);

router.put('/edit-blog/:_id', editBlog);

router.delete('/delete-blog/:_id', deleteBlog);

module.exports = router;