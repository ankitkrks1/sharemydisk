import * as os from 'os';

// Function to retrieve local IP address
function getLocalIPAddress() {
  const interfaces = os.networkInterfaces();
  for (const iface of Object.values(interfaces)) {
    if (iface) {
      for (const { address, family, internal } of iface) {
        if (family === 'IPv4' && !internal) {
          return address;
        }
      }
    }
  }
  return '127.0.0.1'; // Default to localhost if local IP address not found
}

// Get and print the local IP address
const localIPAddress = getLocalIPAddress();
console.log('Local IP address:', localIPAddress);

export default getLocalIPAddress;
