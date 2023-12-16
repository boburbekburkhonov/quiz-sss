import React, { useState } from 'react';
import './List.css'
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import StepContent from '@mui/material/StepContent';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import smart from '../../assets/logo.svg'
import user from '../../assets/user-logout.png'
import logOut from '../../assets/logout.png'

const List = () => {
  const[quizResult, setQuizResult] = useState([])
  const[allResult, setAllResult] = useState([])
  const [steps, setSteps] = useState([
    {
      label: '1-Savol',
      description: `Xodimlar orasida o’zini tutishi?`,
    },
    {
      label: '2-Savol',
      description:
        'Muomala madaniyati?',
    },
    {
      label: '3-Savol',
      description: `Ishga bo’lgan layoqati?`,
    },
    {
      label: '4-Savol',
      description: `Ish vaqtidagi intizomi?`,
    },
    {
      label: '5-Savol',
      description: `Ovqatlanish madaniyati?`,
    },
    {
      label: '6-Savol',
      description: `Ish vaqtida beso’roq tashqariga chiqishi?`,
    },
    {
      label: '7-Savol',
      description: `Ish vaqtida ishdan tashqari bo’lgan narsalarga ko’p vaqt ajratishi?`,
    },
    {
      label: '8-Savol',
      description: `Ishga aloqasi bo’lmagan odamlar bilan telefonda ko’p gaplashishi?`,
    },
    {
      label: '9-Savol',
      description: `Tozalikka rioya qilishi (kiyinishida; o’z ish joyida)?`,
    },
    {
      label: '10-Savol',
      description: `Berilgan topshiriqlarni bajarishi?`,
    },
  ])
  const token = localStorage.getItem('token')
  const name = localStorage.getItem('name')

  if(!token){
    location.href = '/'
  }

  const logout = () => {
    localStorage.clear()
    location.href = '/'
  }

  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  const quizResultFunc = (quizNumber) => {
    const result = quizResult[0]
    const whichQuestion = quizNumber?.split('-')[0]

    allResult.push({
      [whichQuestion]: result != undefined ? result : 0
    })
    if(whichQuestion == 10){
      console.log('finish');
      window.location.reload()
    }
    console.log(allResult);
    setQuizResult([])
  }

  const postResult = e => {
    e.preventDefault()
    const {rowRadio}  = e.target
  }

  return (
      <div>
        {/* Modal */}
        <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
          <div className="modal-dialog modal-dialog-centered quiz-modal-width">
            <div className="modal-content quiz-modal-height">
              <div className="modal-header">
                <h1 className="modal-title fs-5" id="staticBackdropLabel">So'rovnoma</h1>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div className="modal-body m-auto">
                <Box sx={{ maxWidth: 400 }}>
                  <Stepper activeStep={activeStep} orientation="vertical">
                    {steps?.map((step, index) => (
                      <Step key={step.label}>
                        <StepLabel>
                          {step.label}
                        </StepLabel>
                        <StepContent>
                          <Typography className='step-description'>{step.description}</Typography>
                          <p className='m-0 my-2 text-danger'>(1 dan 5 gacha baholang)</p>
                          <form>
                            <RadioGroup
                              row
                              aria-labelledby="demo-row-radio-buttons-group-label"
                              name="rowRadio"
                              onClick={(e) => setQuizResult([e.target.value])}
                            >
                              <FormControlLabel value="1" control={<Radio />} label="1" />
                              <FormControlLabel value="2" control={<Radio />} label="2" />
                              <FormControlLabel value="3" control={<Radio />} label="3" />
                              <FormControlLabel value="4" control={<Radio />} label="4" />
                              <FormControlLabel value="5" control={<Radio />} label="5" />
                            </RadioGroup>
                            <Box sx={{ mb: 2 }}>
                              <div>
                                <Button
                                  variant="contained"
                                  onClick={() => {
                                    handleNext()
                                    quizResultFunc(step.label)
                                  }}
                                  sx={{ mt: 1, mr: 1 }}
                                >
                                  {index === steps.length - 1 ? 'Yakunlash' : 'Davom etish'}
                                </Button>
                              </div>
                            </Box>
                          </form>
                        </StepContent>
                      </Step>
                    ))}
                  </Stepper>
                </Box>
              </div>
            </div>
          </div>
        </div>

        <div className="container-fluid">
          <header className='d-flex justify-content-between align-items-center'>
            <div className='d-flex justify-content-between align-items-center'>
              <img src={smart} alt="smart" width={90} height={90} />
              <h1 className='text-center m-0 my-4 smart-heading'>
                Smart Solutions System xodimlari ro'yhati
              </h1>
            </div>

            <div className='d-flex align-items-center dropdown-toggle' data-bs-toggle="dropdown" aria-expanded="false">
              <img src={user} alt="user" width={30} height={30} />
              <p className='m-0 fs-5 ms-2'>{name}</p>
              <ul class="dropdown-menu m-0 p-0">
                <li className='d-flex align-items-center' onClick={logout}>
                  <img className='ms-3' src={logOut} alt="logOut" width={20} height={20} />
                  <button class="dropdown-item p-0 py-2 ms-2 fw-semibold">Chiqish</button>
                </li>
              </ul>
            </div>
          </header>
          <div className="tableFlexible mt-3">
            <div className="tableFlexible-width">
              <table
                className="table-style"
                id="table-style-hour-id"
              >
                <thead className="">
                  <tr>
                    <th rowSpan="2" className="sticky">
                      T/R
                    </th>
                    <th
                      rowSpan="2"
                      className="sticky"
                      style={{ left: "57px" }}
                    >
                      F.I.SH.
                    </th>
                  </tr>
                  <tr>
                    <th colSpan='2'>Xodimlar orasida o’zini tutishi </th>
                    <th>Muomala madaniyati</th>
                    <th>Ishga bo’lgan layoqati</th>
                    <th>Ish vaqtidagi intizomi</th>
                    <th>Ovqatlanish madaniyati</th>
                    <th colSpan='3'>Ish vaqtida beso’roq tashqariga chiqishi</th>
                    <th colSpan='5'>Ish vaqtida ishdan tashqari narsalarga ko’p vaqt ajratishi</th>
                    <th colSpan='5'>Ishga aloqasi bo’lmaganlar bilan telefonda ko’p gaplashishi</th>
                    <th>Tozalikka rioya qilishi</th>
                    <th>Berilgan topshiriqlarni bajarishi</th>
                  </tr>
                </thead>
                <tbody>
                <tr
                  className="tr0"
                  data-bs-toggle="modal" data-bs-target="#staticBackdrop"
                >
                  <td className="sticky" style={{}}>
                    1
                  </td>
                  <td
                    className="text-start sticky fix-with"
                    style={{ left: "57px" }}
                  >
                    <div className="d-flex align-items-center justify-content-center">
                      <span className="fs-6 fw-normal">
                        Ehsmaty
                      </span>
                    </div>
                  </td>
                  <td colSpan='2'>-</td>
                  <td>-</td>
                  <td>-</td>
                  <td>-</td>
                  <td>-</td>
                  <td colSpan='3'>-</td>
                  <td colSpan='5'>-</td>
                  <td colSpan='5'>-</td>
                  <td>-</td>
                  <td>-</td>
                </tr>
                <tr
                  className="tr0"
                  data-bs-toggle="modal" data-bs-target="#staticBackdrop"
                >
                  <td className="sticky" style={{}}>
                    1
                  </td>
                  <td
                    className="text-start sticky fix-with"
                    style={{ left: "57px" }}
                  >
                    <div className="d-flex align-items-center justify-content-center">
                      <span className="fs-6 fw-normal">
                        Ehsmaty
                      </span>
                    </div>
                  </td>
                  <td colSpan='2'>-</td>
                  <td>-</td>
                  <td>-</td>
                  <td>-</td>
                  <td>-</td>
                  <td colSpan='3'>-</td>
                  <td colSpan='5'>-</td>
                  <td colSpan='5'>-</td>
                  <td>-</td>
                  <td>-</td>
                </tr>
                <tr
                  className="tr0"
                  data-bs-toggle="modal" data-bs-target="#staticBackdrop"
                >
                  <td className="sticky" style={{}}>
                    1
                  </td>
                  <td
                    className="text-start sticky fix-with"
                    style={{ left: "57px" }}
                  >
                    <div className="d-flex align-items-center justify-content-center">
                      <span className="fs-6 fw-normal">
                        Ehsmaty
                      </span>
                    </div>
                  </td>
                  <td colSpan='2'>-</td>
                  <td>-</td>
                  <td>-</td>
                  <td>-</td>
                  <td>-</td>
                  <td colSpan='3'>-</td>
                  <td colSpan='5'>-</td>
                  <td colSpan='5'>-</td>
                  <td>-</td>
                  <td>-</td>
                </tr>
                <tr
                  className="tr0"
                  data-bs-toggle="modal" data-bs-target="#staticBackdrop"
                >
                  <td className="sticky" style={{}}>
                    1
                  </td>
                  <td
                    className="text-start sticky fix-with"
                    style={{ left: "57px" }}
                  >
                    <div className="d-flex align-items-center justify-content-center">
                      <span className="fs-6 fw-normal">
                        Ehsmaty
                      </span>
                    </div>
                  </td>
                  <td colSpan='2'>-</td>
                  <td>-</td>
                  <td>-</td>
                  <td>-</td>
                  <td>-</td>
                  <td colSpan='3'>-</td>
                  <td colSpan='5'>-</td>
                  <td colSpan='5'>-</td>
                  <td>-</td>
                  <td>-</td>
                </tr>
                <tr
                  className="tr0"
                  data-bs-toggle="modal" data-bs-target="#staticBackdrop"
                >
                  <td className="sticky" style={{}}>
                    1
                  </td>
                  <td
                    className="text-start sticky fix-with"
                    style={{ left: "57px" }}
                  >
                    <div className="d-flex align-items-center justify-content-center">
                      <span className="fs-6 fw-normal">
                        Lorem, ipsum dolor.
                      </span>
                    </div>
                  </td>
                  <td colSpan='2'>-</td>
                  <td>-</td>
                  <td>-</td>
                  <td>-</td>
                  <td>-</td>
                  <td colSpan='3'>-</td>
                  <td colSpan='5'>-</td>
                  <td colSpan='5'>-</td>
                  <td>-</td>
                  <td>-</td>
                </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    );
};

export default List;