import React from 'react';
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

const List = () => {
  const steps = [
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
  ];

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
                    {steps.map((step, index) => (
                      <Step key={step.label}>
                        <StepLabel>
                          {step.label}
                        </StepLabel>
                        <StepContent>
                          <Typography className='step-description'>{step.description}</Typography>
                          <p className='m-0 my-2 text-danger'>(1 dan 5 gacha baholang)</p>
                          <FormControl>
                            <RadioGroup
                              row
                              aria-labelledby="demo-row-radio-buttons-group-label"
                              name="row-radio-buttons-group"
                            >
                              <FormControlLabel value="1" control={<Radio />} label="1" />
                              <FormControlLabel value="2" control={<Radio />} label="2" />
                              <FormControlLabel value="3" control={<Radio />} label="3" />
                              <FormControlLabel value="4" control={<Radio />} label="4" />
                              <FormControlLabel value="5" control={<Radio />} label="5" />
                            </RadioGroup>
                          </FormControl>
                          <Box sx={{ mb: 2 }}>
                            <div>
                              <Button
                                variant="contained"
                                onClick={handleNext}
                                sx={{ mt: 1, mr: 1 }}
                              >
                                {index === steps.length - 1 ? 'Yakunlash' : 'Davom etish'}
                              </Button>
                            </div>
                          </Box>
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