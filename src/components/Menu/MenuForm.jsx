import { Box, Button, TextField, Alert } from "@mui/material";
import { useState } from "react";
import { useDispatch } from 'react-redux';
import { createMenu, fetchMenuItems } from "../../store/actions";

const MenuForm = () => {
  const dispatch = useDispatch();
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);
  const [formData, setFormData] = useState({
    id: '',
    name: '',
    parent: '',
    depth: '',
  });

  const handleInputChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSave = async () => {
    try {
      await dispatch(createMenu(formData));
      setSuccess(true);
      setError(null);
      console.log('Data saved:', formData);
       // Dispatch the fetchMenuItems action to update the MenuList
       dispatch(fetchMenuItems());
    } catch (error) {
      setSuccess(false);
      setError(error.message);
      console.error('Error saving data:', error);
    }
  };

  return (
    <Box
      gridColumn="span 1"
      gridRow="span 2"
      padding="30px"
      height="100%"
    >
       <Box>
        <TextField
          label="Menu ID"
          fullWidth
          InputProps={{ style: { borderRadius: '20px', color: 'gray',backgroundColor: '#EAECF0', } }}
          InputLabelProps={{ style: { color: 'gray' } }}
          value={formData.id}
          name="id"
          onChange={handleInputChange}
        />
      </Box>
      <Box>
        <TextField
          label="Depth"
          sx={{ width: '200px', mt: '20px' }}
          InputProps={{ style: { borderRadius: '20px', color: 'gray',backgroundColor: '#EAECF0', } }}
          InputLabelProps={{ style: { color: 'gray' } }}
          value={formData.depth}
          name="depth"
          onChange={handleInputChange}
        />
      </Box>
      <Box>
        <TextField
          label="Parent Data"
          sx={{ width: '200px', mt: '20px' }}
          InputProps={{ style: { borderRadius: '20px', color: 'gray', backgroundColor: '#F9FAFB',} }}
          InputLabelProps={{ style: { color: 'gray' } }}
          value={formData.parent}
          name="parent"
          onChange={handleInputChange}
        />
      </Box>
      <Box>
        <TextField
          label="Name"
          sx={{ width: '200px', mt: '20px' }}
          InputProps={{ style: { backgroundColor: '#F9FAFB',borderRadius: '20px', color: 'gray' } }}
          InputLabelProps={{ style: { color: 'gray' } }}
          value={formData.name}
          name="name"
          onChange={handleInputChange}
        />
      </Box>
      <Box
        sx={{
          display: 'flex',
          marginTop: '20px',
        }}
      >
        <Button
          variant="contained"
          sx={{
            borderRadius: '52px',
            padding: '10px 20px',
            width: '200px',
            backgroundColor: '#0000ff',
            color: '#fff',
            '&:hover': {
              backgroundColor: '#0000cc',
            },
          }}
          onClick={handleSave}
        >
          Save
        </Button>
      </Box>
      {error && (
        <Alert severity="error" sx={{ mt: '20px' }}>
          {error}
        </Alert>
      )}
      {success && (
        <Alert severity="success" sx={{ mt: '20px' }}>
          Data saved successfully!
        </Alert>
      )}
    </Box>
  );
};

export default MenuForm;