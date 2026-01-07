exports.getUsers = (req, res) => {
  res.json({
    message: 'Request berhasil',
    serverPid: process.pid,
    data: [
      { id: 1, name: 'Rivaldo' },
      { id: 2, name: 'User Test' },
    ],
  });
};
