import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';

export default function InfoForm() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [landDetails, setLandDetails] = useState({
    landName: '',
    landId: '',
    area: '',
    adress: '',
    location: '',
    ownerName: '',
    contactInfo: '',
    addressProof: '',
    walletAddress: '',
    paymentDetails: '',
  });

  const onSubmit = async (data) => {
    const formData = new FormData();
    formData.append('landName', data.landName);
    formData.append('landId', data.landId);
    formData.append('area', data.area);
    formData.append('ownername', data.ownerName);
    formData.append('contactInfo', data.contactInfo);
    formData.append('walletAddress', data.walletAddress);
    formData.append('paymentDetails', data.paymentDetails);
    formData.append('landDocuments', data.landDocuments[0]); // Access the first file from the array
    formData.append('digitalAssets', data.digitalAssets[0]); // Access the first file from the array
    formData.append('ownershipProof', data.ownershipProof[0]);
    formData.append('identityProof', data.identityProof[0]);
    console.log(data);
    try {
      const response = await axios.post('/upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      console.log('Upload successful:', response.data);
      setLandDetails
    } catch (error) {
      console.error('Upload error:', error);

    }
  };

  return (
    <div className='relative top-28'>
      <div className='flex justify-center text-3xl'>Register your Real Estate here!</div>
      <form onSubmit={handleSubmit(onSubmit)} className="m-20 p-10 flex flex-col">
        <div className='flex flex-row justify-between p-4'>
          <div className='flex flex-col flex-1 mr-20'>
            <label className='my-2'>Land Name</label>
            <input
              className='bg-black py-2 px-3'
              type='text'
              name='landName'
              {...register("landName", { required: true })}
              required
            />
          </div>
          <div className='flex flex-col flex-1 ml-20'>
            <label className='my-2'>Land ID</label>
            <input
              type='text'
              className='bg-black py-2 px-3'
              name='landId'
              {...register("landId", { required: true })}
              required
            />
          </div>
        </div>
        <div className='flex flex-row justify-between p-4'>
          <div className='flex flex-col flex-1 mr-20'>
            <label className='my-2'>Area</label>
            <input
              type='text'
              className='bg-black py-2 px-3'
              name='area'
              {...register("area", { required: true })}
              required
            />
          </div>
          <div className='flex flex-col flex-1 ml-20'>
            <label className='my-2'>Address</label>
            <input
              type='text'
              className='bg-black py-2 px-3'
              name='location'
              {...register("location", { required: true })}
              required
            />
          </div>
        </div>
        <div className='flex flex-row justify-between p-4'>
          <div className='flex flex-col flex-1 mr-20'>
            <label className='my-2'>Owner Name</label>
            <input
              type="text"
              className='bg-black py-2 px-3'
              name="ownerName"
              {...register("ownerName", { required: true })}
              required
            />
          </div>
          <div className='flex flex-col flex-1 ml-20'>
            <label className='my-2'>Contact Info</label>
            <input
              type="text"
              className='bg-black py-2 px-3'
              name="contactInfo"
              {...register("contactInfo", { required: true })}
              required
            />
          </div>
        </div>
        <div className='flex flex-col justify-between p-4'>
          <label className='my-2'>Wallet Address</label>
          <input
            type="text"
            className='bg-black py-2 px-3'
            name="walletAddress"
            {...register("walletAddress", { required: true })}
            required
          />
        </div>
        <div className='flex flex-col justify-between p-4'>
          <label className='my-2'>Ownership Proof</label>
          <input
            type="file"
            className='bg-black py-2 px-3'
            name="ownershipProof"
            {...register("ownershipProof", { required: true })}
            required
          />
          {errors.ownershipProof && <span className="error">{errors.ownershipProof.message}</span>}
        </div>
        <div className='flex flex-col justify-between p-4'>
          <label className='my-2'>Land Documents</label>
          <input
            type="file"
            className='bg-black py-2 px-3'
            {...register("landDocuments", { required: true })}
            name="landDocuments"
          />
          {errors.landDocuments && <span className="error">{errors.landDocuments.message}</span>}
        </div>
        <div className='flex flex-col justify-between p-4'>
          <label className='my-2'>Identity Proof</label>
          <input
            type="file"
            className='bg-black py-2 px-3'
            name="identityProof"
            {...register("identityProof", { required: true })}
            required
          />
          {errors.identityProof && <span className="error">{errors.identityProof.message}</span>}
        </div>
        <div className='flex flex-col justify-between p-4'>
          <label className='my-2'>Location</label>
          <input
            type="text"
            className='bg-black py-2 px-3'
            name="addressProof"
            {...register("addressProof", { required: true })}
            required
          />
        </div>
        <div className='flex flex-col justify-between p-4'>
          <label className='my-2'>Digital Assets</label>
          <input
            type="file"
            className='bg-black py-2 px-3'
            {...register("digitalAssets", { required: true })}
            name="digitalAssets"
          />
          {errors.digitalAssets && <span className="error">{errors.digitalAssets.message}</span>}
        </div>
        <div className='flex flex-col justify-between p-4'>
          <label className='my-2'>Payment Details</label>
          <input
            type="text"
            className='bg-black py-2 px-3'
            placeholder='Card No'
            name="paymentDetails"
            {...register("paymentDetails", { required: true })}
            required
          />
        </div>
        <div className='flex justify-center mt-3'>
          <button type='submit' className='bg-gray-800  py-4 px-5 hover:bg-cyan-900'>Submit</button>
        </div>
      </form>
    </div>
  );
}
