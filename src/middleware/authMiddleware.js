// Authentication middleware for protecting admin routes
export const authenticateToken = (req, res, next) => {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];

  if (!token) {
    return res.status(401).json({
      success: false,
      message: 'Access token required'
    });
  }

  // In a real application, verify JWT token here
  // For demo purposes, we'll check for a simple admin token
  if (token === 'admin-token-123') {
    req.user = { id: 'admin', role: 'admin' };
    next();
  } else {
    return res.status(403).json({
      success: false,
      message: 'Invalid or expired token'
    });
  }
};

// Admin role verification middleware
export const requireAdmin = (req, res, next) => {
  if (!req.user || req.user.role !== 'admin') {
    return res.status(403).json({
      success: false,
      message: 'Admin access required'
    });
  }
  next();
};

// Combined middleware for admin routes
export const adminAuth = [authenticateToken, requireAdmin];