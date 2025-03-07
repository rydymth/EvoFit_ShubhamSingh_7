const mongoose = require('mongoose');
const express = require('express');
const bcrypt = require('bcrypt');
var bodyParser = require('body-parser')

const app = express();
const cors = require("cors");
app.use(express.json());
app.use(bodyParser.urlencoded({
    extended: true
  }));
app.use(cors("*"))

const userSchema = new mongoose.Schema({
  Name: {
    type: String,
    required: true
  },
  Username: {
    type: String,
    required: true,
    unique: true
  },
  Password: {
    type: String,
    required: true
  },
  height: {
    type: Number,
    required: true
  },
  weight: {
    type: Number,
    required: true
  },
  GameSessions: [{
    sessionId: {
      type: mongoose.Schema.Types.ObjectId,
      default: () => new mongoose.Types.ObjectId()
    },
    time: {
        type: Date,
        default: Date.now
      },
    steps: Number,
    jumps: Number,
    sideJumps: Number
  }]
}, { timestamps: true });

const User = mongoose.model('User', userSchema);

// Register API
app.post('/register', async (req, res) => {
  try {
    console.log('Incoming request to /register:', req.body);
    const { Name, Username, Password, height, weight, GamesPlayed, PlayTime } = req.body;

    // Hash password
    const hashedPassword = await bcrypt.hash(Password, 10);

    // Create user
    const newUser = new User({
      Name,
      Username,
      Password: hashedPassword,
      height,
      weight,
    });

    await newUser.save();
    console.log('User registered successfully:', Username);
    res.status(201).json({ message: 'User registered successfully' });
  } catch (error) {
    console.error('Error during registration:', error);
    res.status(500).json({ error: error.message });
  }
});

// Login API
app.post('/login', async (req, res) => {
  try {
    console.log('Incoming request to /login:', req.body);
    const { Username, Password } = req.body;
    const user = await User.findOne({ Username });
    if (!user) {
      console.log('Login failed: User not found', Username);
      return res.status(400).json({ message: 'Invalid username or password' });
    }

    const isMatch = await bcrypt.compare(Password, user.Password);
    if (!isMatch) {
      console.log('Login failed: Incorrect password for', Username);
      return res.status(400).json({ message: 'Invalid username or password' });
    }

    console.log('Login successful:', Username);
    res.json({ message: 'Login successful', user: { Name: user.Name, Username: user.Username, height: user.height, weight: user.weight, GamesPlayed: user.GamesPlayed, PlayTime: user.PlayTime } });
  } catch (error) {
    console.error('Error during login:', error);
    res.status(500).json({ error: error.message });
  }
});

app.post('/api/game-stats', async (req, res) => {
    try {
      console.log('Incoming request to /save-game:', req.body);
      const { name, steps, jumps, sideJumps } = req.body;
      const user = await User.findOne({ Username: name });
  
      if (!user) {
        console.log('Game session save failed: User not found', name);
        return res.status(404).json({ message: 'User not found' });
      }
  
      const newSession = {
        steps,
        jumps,
        sideJumps,
        time: new Date()
      };
  
      user.GameSessions.push(newSession);
      await user.save();
  
      console.log('Game session saved successfully for user:', name);
      res.status(201).json({ message: 'Game session saved successfully', session: newSession });
    } catch (error) {
      console.error('Error saving game session:', error);
      res.status(500).json({ error: error.message });
    }
  });

  app.get('/game-sessions/:Username', async (req, res) => {
    try {
      console.log('Incoming request to /game-sessions:', req.params);
      const { Username } = req.params;
      const user = await User.findOne({ Username });
  
      if (!user) {
        console.log('Game session fetch failed: User not found', Username);
        return res.status(404).json({ message: 'User not found' });
      }
  
      console.log('Game sessions retrieved successfully for user:', Username);
      res.json({ gameSessions: user.GameSessions });
    } catch (error) {
      console.error('Error fetching game sessions:', error);
      res.status(500).json({ error: error.message });
    }
  });


// Connect to MongoDB and start server
mongoose.connect('mongodb://localhost:27017/admin', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log('Connected to MongoDB');
  app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
  });
}).catch(error => console.error('MongoDB connection error:', error));

module.exports = User;