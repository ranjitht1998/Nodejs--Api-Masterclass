
// Get all bootcamps
// GET /api/v1/bootcamps
// Public
exports.getBootcamps = (req, res, next) => {
    res.status(200).json({ success: true, msg: "Show all bootcamp" });
}


// Get single bootcamp
// GET /api/v1/bootcamps/:id
// Public
exports.getBootcamp = (req, res, next) => {
    res.status(200).json({ success: true, msg: `Get bootcamp ${req.params.id}` });
}



// Create new bootcamp
// POST /api/v1/bootcamps
// Private
exports.createBootcamp = (req, res, next) => {
    res.status(200).json({ success: true, msg: "Create new bootcamp" });
}


// Update bootcamp
// PUT /api/V1/bootcamps/:id
// Private
exports.updateBootcamp = (req, res, next) => {
    res.status(200).json({ success: true, msg: `Update bootcamp ${req.params.id}` });
}


// Delete bootcamp
// DELETE /api/V1/bootcamps/:id
// Private
exports.deleteBootcamp = (req, res, next) => {
    res.status(200).json({ success: true, msg: `Delete bootcamp ${req.params.id}` });
}







