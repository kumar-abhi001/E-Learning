export const asyncHandler = (func) => async (req, res, next) => {
    try {
        return await func(req, res, next);
    } catch (error) {
        res.status(error.status || 400).json({
            success: false,
            message: error.message
        });
    }
}