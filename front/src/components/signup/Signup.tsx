import React, { useState } from "react";
import styles from './signup.module.css';
import { useNavigate } from 'react-router-dom'; 
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import TextField from '@mui/material/TextField';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateField } from '@mui/x-date-pickers/DateField';
import { Typography } from '@mui/material';
import { Grid } from '@mui/material';
import { IconButton } from '@mui/material';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';



function Signup() {

  const navigate = useNavigate();

  // 계좌 등록 화면으로 이동해야 한다. 경로 변경 필요!
  const completeClick = () => {
    navigate('/mainparent/childstatus');
  };

  const divBorder = {
    border: "1px solid black",       
    margin: "10px"
  };

// 초대코드 로직
const [selectedValue, setSelectedValue] = useState('female');

const handleRadioChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  setSelectedValue(event.target.value);
};

// 성별 로직
const [age, setAge] = useState('');

const handleSelectChange = (event: SelectChangeEvent) => {
  setAge(event.target.value);
};
    
  return (
    <div className={styles.materialContainer}>
      <div className={styles.thirdbox}></div>
      <div className={styles.secondbox}></div>
      <div className={styles.box}>
        <div className={styles.titleContainer}>
          <div className={styles.title}>회원가입</div>
          {/* 닫기 버튼 */}
          <IconButton aria-label="close" size="large" className={styles.close}>
              <CloseRoundedIcon style={{ color: 'white', fontSize: 40 }} />
          </IconButton>
        </div>

        <Grid container spacing={3} className={styles.gap6} alignItems="center">
          {/* 부모 or 아이 */}
          <Grid item xs={12} sm={6}>
            <FormControl>
              <RadioGroup
                row
                aria-labelledby="demo-row-radio-buttons-group-label"
                name="row-radio-buttons-group"
                defaultValue="female"
                value={selectedValue}
                onChange={handleRadioChange}
              >
                <FormControlLabel
                  value="female"
                  control={<Radio sx={{
                    color: 'white',
                    '&.Mui-checked': {
                      color: 'white',
                    },
                    '& .MuiSvgIcon-root': {
                      fontSize: 25,
                    },
                  }} />}
                  label={<Typography sx={{ fontSize: 18, color: 'white' }}>아이</Typography>}
                />
                <FormControlLabel
                  value="male"
                  control={<Radio sx={{
                    color: 'white',
                    '&.Mui-checked': {
                      color: 'white',
                    },
                    '& .MuiSvgIcon-root': {
                      fontSize: 25,
                    },
                  }} />}
                  label={<Typography sx={{ fontSize: 18, color: 'white' }}>부모</Typography>}
                />
              </RadioGroup>
            </FormControl>
          </Grid>
          {/* 부모님 초대코드, 아이를 선택했을 때만 표시 */}
          {selectedValue === 'female' && (
            <Grid item xs={12} sm={6} className={`${styles.gap5} ${styles.paddings}`}>
              <TextField
                fullWidth
                id="parentCode"
                label="부모님 초대코드"
                type="text"
                variant="standard"
                color="primary"
                inputProps={{
                  style: {
                    fontSize: 22,
                    color: 'white',
                    caretColor: 'white'
                  }
                }}
                InputLabelProps={{
                  style: {
                    fontSize: 20,
                    color: 'white',
                  }
                }}
                sx={{
                  '& .MuiInput-underline:before': {
                    borderBottom: '2px solid #B0BEC5',
                  },
                  '& .MuiInput-underline:after': {
                    borderBottomColor: 'white',
                  },
                  '& .MuiInput-underline:hover:not(.Mui-disabled):before': {
                    borderBottomColor: 'white',
                  },
                  '& .MuiInputBase-input::placeholder': {
                    color: 'white',
                    opacity: 1,
                  },
                }}
              />
            </Grid>
          )}
        </Grid>
        
        <Grid container spacing={3} className={styles.gap1}>
          {/* 성별 */}
          <Grid item xs={12} sm={4} className={styles.paddings}>
            <FormControl variant="standard" sx={{ my: 1, minWidth: 120, color: 'white' }}>
            <InputLabel id="gender" sx={{ color: 'white', fontSize: 20, '&.Mui-focused': { color: 'white' } }}>성별</InputLabel>            
            <Select
              labelId="gender"
              id="gender"
              value={age}
              onChange={handleSelectChange}
              sx={{
                color: 'white',
                fontSize: 22,
                '&:before': {
                  borderBottom: '2px solid #B0BEC5',
                },
                '&:hover:before': {
                  borderBottom: '2px solid white !important',
                },
                
                '&:after': {
                  borderBottomColor: "white",
                },
                '& .MuiSvgIcon-root': {
                  color: "white",
                },
              }}
            >
                <MenuItem value="">
                </MenuItem>
                <MenuItem value={10} sx={{fontSize: 20}}>여자</MenuItem>
                <MenuItem value={20} sx={{fontSize: 20}}>남자</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={8} className={styles.paddings}>
            {/* 생년월일 */}
            <LocalizationProvider dateAdapter={AdapterDayjs}>
            <div style={{ width: '215px', marginLeft: 25 }}>
              <DemoContainer components={['DateField']}>
                <DateField
                  format="YYYY/MM/DD"
                  variant="standard"
                  color="primary"
                  label="생년월일"
                  inputProps={{
                    style: {
                      fontSize: 22,
                      color: 'white',
                      caretColor: 'white' 
                    }
                  }}
                  InputLabelProps={{
                    style: {
                      fontSize: 20,
                      color: 'white', 
                    }
                  }}
                  sx={{
                    '& .MuiInput-underline:before': { 
                      borderBottom: '2px solid #B0BEC5',
                    },
                    '& .MuiInput-underline:after': { 
                      borderBottomColor: 'white',
                    },
                    '& .MuiInput-underline:hover:not(.Mui-disabled):before': {
                      borderBottomColor: 'white',
                    },
                    '& .MuiInputBase-input::placeholder': { 
                      color: 'white',
                      opacity: 1,
                    },
                  }}
                />
              </DemoContainer>
            </div>
            </LocalizationProvider>
          </Grid>
        </Grid>

        <Grid container spacing={3} className={styles.gap3}>
          {/* 이름 */}
          <Grid item xs={12} sm={5} className={styles.paddings}>
            <TextField
              fullWidth
              id="name"
              label="이름"
              type="text"
              variant="standard"
              color="primary"
              inputProps={{
                style: {
                  fontSize: 22,
                  color: 'white',
                  caretColor: 'white' 
                }
              }}
              InputLabelProps={{
                style: {
                  fontSize: 20,
                  color: 'white', 
                }
              }}
              sx={{
                '& .MuiInput-underline:before': { 
                  borderBottom: '2px solid #B0BEC5',
                },
                '& .MuiInput-underline:after': { 
                  borderBottomColor: 'white',
                },
                '& .MuiInput-underline:hover:not(.Mui-disabled):before': {
                  borderBottomColor: 'white',
                },
                '& .MuiInputBase-input::placeholder': { 
                  color: 'white',
                  opacity: 1,
                },
              }}
            />
          </Grid>
          {/* 이메일 */}
          <Grid item xs={12} sm={7} className={styles.paddings}>
            <TextField
              fullWidth
              id="email"
              label="이메일"
              type="text"
              variant="standard"
              color="primary"
              inputProps={{
                style: {
                  fontSize: 22,
                  color: 'white',
                  caretColor: 'white' 
                }
              }}
              InputLabelProps={{
                style: {
                  fontSize: 20,
                  color: 'white', 
                }
              }}
              sx={{
                '& .MuiInput-underline:before': { 
                  borderBottom: '2px solid #B0BEC5',
                },
                '& .MuiInput-underline:after': { 
                  borderBottomColor: 'white',
                },
                '& .MuiInput-underline:hover:not(.Mui-disabled):before': {
                  borderBottomColor: 'white',
                },
                '& .MuiInputBase-input::placeholder': { 
                  color: 'white',
                  opacity: 1,
                },
              }}
            />
          </Grid>
        </Grid>

        <Grid container spacing={3} className={styles.gap}>
          {/* 비밀번호 필드 */}
          <Grid item xs={12} sm={6} className={styles.paddings}>
            <TextField
              fullWidth
              id="password"
              label="비밀번호"
              type="password"
              variant="standard"
              color="primary"
              inputProps={{
                style: {
                  fontSize: 22,
                  color: 'white',
                  caretColor: 'white'
                }
              }}
              InputLabelProps={{
                style: {
                  fontSize: 20,
                  color: 'white',
                }
              }}
              sx={{
                '& .MuiInput-underline:before': {
                  borderBottom: '2px solid #B0BEC5',
                },
                '& .MuiInput-underline:after': {
                  borderBottom: '2px solid white',
                },
                '& .MuiInput-underline:hover:not(.Mui-disabled):before': {
                  borderBottom: '2px solid white',
                },
                '& .MuiInputBase-input::placeholder': {
                  color: 'white',
                  opacity: 1,
                },
              }}
            />
          </Grid>
          
          {/* 비밀번호 확인 필드 */}
          <Grid item xs={12} sm={6} className={styles.paddings}>
            <TextField
              fullWidth
              id="confirm"
              label="비밀번호 확인"
              type="password"
              variant="standard"
              color="primary"
              inputProps={{
                style: {
                  fontSize: 22,
                  color: 'white',
                  caretColor: 'white'
                }
              }}
              InputLabelProps={{
                style: {
                  fontSize: 20,
                  color: 'white',
                }
              }}
              sx={{
                '& .MuiInput-underline:before': {
                  borderBottom: '2px solid #B0BEC5',
                },
                '& .MuiInput-underline:after': {
                  borderBottom: '2px solid white',
                },
                '& .MuiInput-underline:hover:not(.Mui-disabled):before': {
                  borderBottom: '2px solid white',
                },
                '& .MuiInputBase-input::placeholder': {
                  color: 'white',
                  opacity: 1,
                },
              }}
            />
          </Grid>
        </Grid>

        {/* 회원가입 완료 버튼 */}
        <div className={`${styles.button} ${styles.login}`}>
          <button type="submit">
            <span>회원가입</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Signup;