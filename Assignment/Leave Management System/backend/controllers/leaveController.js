const db  = require('../models');
const dbleave = db.LeaveRequest
const { Op } = require('sequelize');

exports.createLeaveRequest = async (req, res) => {
  try {
    const { username, leaveType, startDate, endDate, reason } = req.body;
    const newLeaveRequest = await dbleave.create({ username, leaveType, startDate, endDate, reason, status: 'pending' });
    res.status(201).json(newLeaveRequest);
  } catch (error) {
    console.error('Error saving leave request:', error);
    res.status(500).json({ message: 'Failed to save leave request' });
  }};

exports.getPendingLeaveRequests = async (req, res) => {
try {
  const pendingRequests = await dbleave.findAll({
      where: { status: 'pending' }
  });
  res.json(pendingRequests); 
} catch (error) {
  console.error('Error fetching pending requests:', error);
  res.status(500).json({ message: 'Internal server error' });
}};

exports.approveLeaveRequest = async (req, res) => {
  const { id } = req.params;
  try {
    const [updatedCount, updatedRequests] = await dbleave.update(
      { status: 'approved' }, 
      { where: { id }, returning: true } 
    );
    if (updatedCount === 0) {
      return res.status(404).json({ message: 'Leave request not found' });
    }
    return res.status(200).json(updatedRequests[0]);
  } catch (error) {
    console.error('Error approving leave request:', error);
    return res.status(500).json({ message: 'Internal server error' });
  }};

exports.denyLeaveRequest = async (req, res) => {
  const { id } = req.params;
  try {
    const denied = await dbleave.update(
      { status: 'denied' }, 
      { where: { id } } 
    );
    if (!denied[0]) {
      return res.status(404).json({ message: 'Leave request not found' });
    }
    return res.status(200).json({ message: 'Leave request denied successfully' });
  } catch (error) {
    console.error('Error denying leave request:', error);
    return res.status(500).json({ message: 'Error denying leave request' });
  } };

exports.getLeaveHistory = async (req, res) => {
  try {
    const leaveHistory = await dbleave.findAll({
      where: {
        status: {
          [Op.or]: ['approved', 'denied']
        }
      }
    });
    return res.status(200).json(leaveHistory);
  } catch (error) {
    console.error('Error fetching leave history:', error);
    return res.status(500).json({ message: 'Internal server error' });
  }};

exports.deleteLeaveRequest = async (req, res) => {
  const { id } = req.params;
  try {
    const leaveRequest = await dbleave.findByPk(id);
    if (!leaveRequest) {
      return res.status(404).json({ message: 'Leave request not found' });
    }
    await leaveRequest.destroy();
    return res.status(200).json({ message: 'Leave request deleted successfully' });
  } catch (error) {
    console.error('Error deleting leave request:', error);
    return res.status(500).json({ message: 'Internal server error' });
  }};

exports.getUserLeaveHistory = async (req, res) => {
  const username = req.user.username;
  try {
    const leaveHistory = await dbleave.findAll({
      where: {
        username: username, 
      },
    });
    return res.status(200).json(leaveHistory);
  } catch (error) {
    console.error('Error fetching leave history:', error);
    return res.status(500).json({ message: 'Internal server error' });
  }
};



