import React from 'react'
import { Box} from '@mui/system'
import CustomInput from '../Inputs/CustomInput'
import CustomSelect from '../Inputs/CustomSelect'
import CustomRadio from '../Inputs/CustomRadio'
import CustomefileInput from '../Inputs/CustomefileInput'


const HomeDetailsView = () => {
  return (
    <Box>
      <form autoComplete='off'>
        <fieldset style={{borderRadius:'16px',color:'grey'}}>
        <legend>Holiday Home Details</legend>
            <CustomInput label={'Name'} placeholder={'Enter Name'} required={false}/>
            <CustomInput label={'Address'} placeholder={'Enter Address'} required={false}/>
            <CustomInput label={'District'} placeholder={'Enter District'} required={false}/>
            <CustomInput label={'Description'} placeholder={'Enter Description'} required={false}/>
            <CustomInput label={'Contact No 1'} placeholder={'Enter Contact No 1'} required={false}/>
            <CustomInput label={'Contact No 2'} placeholder={'Enter Contact No 2'} required={false}/>
            <CustomSelect label={'Catogery'} Placeholder={'Select Category'} required={false}/>
            <CustomRadio label={'Status'} radio1={'Active'} radio2={'Inactive'} required={false}/>
            <CustomefileInput label={'Image'} required={false}/>
        
        </fieldset>
      </form>

    </Box>
  )
}

export default HomeDetailsView