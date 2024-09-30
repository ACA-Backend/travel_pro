import * as vehicleService from '../services/vehicle.service.js';
import { asyncHandler } from '../../lib/util.js';

export const createNewVehicle = asyncHandler(async(req, res)=>
{
    console.log("congratulations, you have landed in the create new vehicles controller");
});