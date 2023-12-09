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
import { styled } from '@mui/material/styles';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';

const List = () => {
  const steps = [
    {
      label: 'Select campaign settings',
      description: `For each ad campaign that you create, you can control how much
                you're willing to spend on clicks and conversions, which networks
                and geographical locations you want your ads to show on, and more.`,
    },
    {
      label: 'Create an ad group',
      description:
        'An ad group contains one or more ads which target a shared set of keywords.',
    },
    {
      label: 'Create an ad',
      description: `Try out different ad text to see what brings in the most customers,
                and learn how to enhance your ads using features like ad extensions.
                If you run into any problems with your ads, find out how to tell if
                they're running and how to resolve approval issues.`,
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

  const valueTodayTable = [
    "00",
    "01",
    "02",
    "03",
    "04",
    "05",
    "06",
    "07",
    "08",
    "09",
    "10",
    "11",
    "12",
    "13",
    "14",
    "15",
    "16",
    "17",
    "18",
    "19",
    "20",
    "21",
    "22",
    "23",
  ];

    return (
      <div>
        {/* Modal */}
        <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
          <div className="modal-dialog modal-dialog-centered quiz-modal-width">
            <div className="modal-content quiz-modal-height">
              <div className="modal-header">
                <h1 className="modal-title fs-5" id="staticBackdropLabel">Surovnoma</h1>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div className="modal-body">
                <Box sx={{ maxWidth: 400 }}>
                  <Stepper activeStep={activeStep} orientation="vertical">
                    {steps.map((step, index) => (
                      <Step key={step.label}>
                        <StepLabel
                          optional={
                            index === 2 ? (
                              <Typography variant="caption">Last step</Typography>
                            ) : null
                          }
                        >
                          {step.label}
                        </StepLabel>
                        <StepContent>
                          <Typography>{step.description}</Typography>
                          <Box sx={{ mb: 2 }}>
                            <div>
                              <Button
                                variant="contained"
                                onClick={handleNext}
                                sx={{ mt: 1, mr: 1 }}
                              >
                                {index === steps.length - 1 ? 'Finish' : 'Continue'}
                              </Button>
                              <Button
                                disabled={index === 0}
                                onClick={handleBack}
                                sx={{ mt: 1, mr: 1 }}
                              >
                                Back
                              </Button>
                            </div>
                          </Box>
                        </StepContent>
                      </Step>
                    ))}
                  </Stepper>
                  {activeStep === steps.length && (
                    <Paper square elevation={0} sx={{ p: 3 }}>
                      <Typography>All steps completed - you&apos;re finished</Typography>
                      <Button onClick={handleReset} sx={{ mt: 1, mr: 1 }}>
                        Reset
                      </Button>
                    </Paper>
                  )}
                </Box>
              </div>
              {/* <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                <button type="button" className="btn btn-primary">Understood</button>
              </div> */}
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