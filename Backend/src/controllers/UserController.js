import { StatusCodes } from 'http-status-codes';
async function getinfo(req, res) {
  try {
    res.status(StatusCodes.OK).json(req.user);
  } catch (error) {
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ error: error.message });
  }
}
export const UserController = {
  getinfo
};
