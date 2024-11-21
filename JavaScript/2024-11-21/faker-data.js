import { fakerEN } from "@faker-js/faker";
const generateNewVehicle = () => {
	return {
	  make: fakerEN.vehicle.manufacturer(),
	  model: fakerEN.vehicle.model(),
	  type: fakerEN.vehicle.type(),
	  color: fakerEN.color.human(),
	  fuel: fakerEN.vehicle.fuel(),
	  vin: fakerEN.vehicle.vin(),
	  registrationNumber: fakerEN.vehicle.vrm(),
	};
};
const generateNewPerson = () => {
	return {
	  firstName: fakerEN.person.firstName(),
	  lastName: fakerEN.person.lastName(),
	  age: fakerEN.number.int({ min: 18, max: 99 }),
	  gender: fakerEN.person.sex(),
	  email: fakerEN.internet.email(),
	  phone: fakerEN.phone.number(),

	  bio: fakerEN.person.bio(),
	  avatar: fakerEN.image.avatar(),
	};
};
  
console.log(generateNewPerson());