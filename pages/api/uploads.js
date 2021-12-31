import nextConnect from 'next-connect';
import multer from 'multer';
import fs from 'fs'

const upload = multer({
  storage: multer.diskStorage({
    destination: './public/uploads',
    filename: (req, file, cb) => cb(null, file.originalname),
  }),
});

const apiRoute = nextConnect({
  onError(error, req, res) {
    res.status(501).json({ error: `Sorry something Happened! ${error.message}` });
  },
  onNoMatch(req, res) {
    res.status(405).json({ error: `Method '${req.method}' Not Allowed` });
  },
});

apiRoute.use(upload.single('file'));

apiRoute.post((req, res) => {
  res.status(200).json({
  	filename: req.file.originalname
  });
});

apiRoute.delete((req, res) => {
	const { filename } = req.query
	if (filename) {
		fs.unlink(`./public/uploads/${filename}`, (error) => {
			if (error) {
				throw error
			} else {
					res.status(200).end('success')
			}
		})
	} else {
		throw new Error('No Filename')
	}
});

export default apiRoute;

export const config = {
  api: {
    bodyParser: false, // Disallow body parsing, consume as stream
  },
};