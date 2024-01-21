import React from 'react'
import { Box} from '@mui/system'
import CustomInput from '../Inputs/CustomInput'
import CustomRadio from '../Inputs/CustomRadio'
import CustomefileInput from '../Inputs/CustomefileInput'


const CareTakerDetailsView = () => {
  return (
    <Box>
      <form autoComplete='off'>
        <fieldset style={{borderRadius:'16px',color:'grey'}}>
        <legend>Caretaker Details</legend>
            <CustomInput label={'Name'} placeholder={'Enter Name'} required={false}/>
            <CustomInput label={'Contact No'} placeholder={'Enter Contact No'} required={false}/>
            <CustomRadio label={'Status'} radio1={'Active'} radio2={'Inactive'} required={false}/>
            <CustomInput label={'Address'} placeholder={'Enter Address'} required={false}/>
            <CustomInput label={'Description'} placeholder={'Enter Description'} required={false}/>
            <CustomefileInput label={'Image'} required={false}/>
        
        </fieldset>
      </form>

    </Box>
  )
}

export default CareTakerDetailsView