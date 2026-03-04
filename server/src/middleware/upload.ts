import multer from 'multer';
import { CloudinaryStorage } from 'multer-storage-cloudinary';
import cloudinary from '../config/cloudinary';

const storage = new CloudinaryStorage({
  cloudinary,
  params: {
    folder: 'tvartha_news',
    allowed_formats: ['jpg', 'jpeg', 'png', 'webp']
  } as never
});

const upload = multer({ storage });

export default upload;
