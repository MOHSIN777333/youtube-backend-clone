const asyncHandler = (requestHandler) => async (req, res, next) => {
  try {
    await requestHandler(req, res, next);
  } catch (error) {
    res.status(error.code || 500).json({
      success: false,
      message: error.message,
    });
  }
};

export {asyncHandler}

// promise asynchandle but i use async / await
/*const asynchandle = (requesthandle) => {
  (req, res, next) =>
    Promise.resolve(requesthandle(req, res, next)).catch((error) =>
      next(error)
    );
};
*/
