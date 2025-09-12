// Fallback wrapper: always re-exports the correct Parking screen
// This wrapper makes TypeScript happy and ensures imports always work.
import { Platform } from 'react-native';
import NativeParkingScreen from './ParkingScreen.native';
import WebParkingScreen from './ParkingScreen.web';

const ParkingScreen = Platform.OS === 'web' ? WebParkingScreen : NativeParkingScreen;

export default ParkingScreen;
