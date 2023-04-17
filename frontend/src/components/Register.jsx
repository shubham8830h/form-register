import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useState } from "react";
import axios from "axios";

const Register = () => {
  // const { optionsState, selectedOptionState, setSelectedOptionState } = props;
  //=============================== state ================================================
  const [selectedOptionState, setSelectedOptionState] = useState("Maharashtra");
  const optionsState = [
    { value: "Andhra Pradesh", label: "Andhra Pradesh" },
    { value: "Assam", label: "Assam" },
    { value: "Bihar", label: "Bihar" },
    { value: "Chhattisgarh", label: "Chhattisgarh" },
    { value: "Goa", label: "Goa" },
    { value: "Gujarat", label: "Gujarat" },
    { value: "Haryana", label: "Haryana" },
    { value: "Himachal Pradesh", label: "Himachal Pradesh" },
    { value: "Jharkhand", label: "Jharkhand" },
    { value: "Karnataka", label: "Karnataka" },
    { value: "Kerala", label: "Kerala" },
    { value: "Madhya Pradesh", label: "Madhya Pradesh" },
    { value: "Maharashtra", label: "Maharashtra" },
    { value: "Manipur", label: "Manipur" },
    { value: "Meghalaya", label: "Meghalaya" },
    { value: "Mizoram", label: "Mizoram" },
    { value: "Nagaland", label: "Nagaland" },
    { value: "Odisha", label: "Odisha" },
    { value: "Punjab", label: "Punjab" },
    { value: "Rajasthan", label: "Rajasthan" },
    { value: "Sikkim", label: "Sikkim" },
    { value: "Tamil Nadu", label: "Tamil Nadu" },
    { value: "Telangana", label: "Telangana" },
    { value: "Tripura", label: "Tripura" },
    { value: "Uttar Pradesh", label: "Uttar Pradesh" },
    { value: "Uttarakhand", label: "Uttarakhand" },
    { value: "West Bengal", label: "West Bengal" },
  ];

  const handleOptionChangeState = (e) => {
    setSelectedOptionState(e.target.value);
  };

  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    mobile_no: "",
    firm_name: "",
    plan: "",
    address: "",
    pin_code: "",
    gst_no: "",
    dl_no_1: "",
    dl_no_2: "",
    fassai_no: "",
    account_name: "",
    account_no: "",
    IFSC_Code: "",
    branch: "",
  });
  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };
  //============== register as radio button code ==============
  const [selectedOption, setSelectedOption] = useState("");

  const handleOptionChange = (event) => {
    // If the clicked option is already selected, unselect it
    if (selectedOption === event.target.value) {
      setSelectedOption("");
    } else {
      setSelectedOption(event.target.value);
    }
  };
  //=======================================================

  //==================  Categories check box code ============
  const [checkboxValues, setCheckboxValues] = useState({
    allopathic: false,
    generic: false,
    surgical: false,
    otc: false,
    ayurvedic: false,
    veterinary: false,
    privacy: false,
  });

  const handleCheckboxChange = (event) => {
    const { name, checked } = event.target;
    setCheckboxValues({
      ...checkboxValues,
      [name]: checked,
    });
  };
  // ============================================

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      formData,
      checkboxValues,
      selectedOption,
      Name,
      selectedOptionState,
    };

    try {
      const result = await axios.post("/register", data);

      console.log(result.data);
    } catch (error) {
      console.log(error);
    }
    console.log("sfsdfdsf", optionsState);
    console.log(formData, checkboxValues, Name, selectedOption);
  };

  // ============== file upload code ===============
  const [Name, setFile] = useState("");

  const handleFileUpload = (event) => {
    var reader = new FileReader();
    reader.readAsDataURL(event.target.files[0]);
    reader.onload = () => {
      setFile(reader.result);
    };
    reader.onerror = (error) => {
      console.log("Error: ", error);
    };

    console.log(event);
  };

  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand>Partner with us</Navbar.Brand>
        </Container>
      </Navbar>

      <Container>
        <Row mt="3px">
          <Form onSubmit={handleSubmit}>
            <div className="row">
              <div className="col">
                <Form.Group className="mb-3" controlId="first_name">
                  <Form.Label>First Name</Form.Label>
                  <Form.Control
                    type="name"
                    required
                    name="first_name"
                    value={formData.first_name}
                    onChange={handleChange}
                  />
                </Form.Group>
              </div>
              <div className="col">
                <Form.Group className="mb-3" controlId="last_name">
                  <Form.Label>Last Name</Form.Label>
                  <Form.Control
                    type="name"
                    required
                    name="last_name"
                    value={formData.last_name}
                    onChange={handleChange}
                  />
                </Form.Group>
              </div>
            </div>
            <div className="row">
              <div className="col">
                <Form.Group className="mb-3" controlId="email">
                  <Form.Label>Email ID</Form.Label>
                  <Form.Control
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </Form.Group>
              </div>
              <div className="col">
                <Form.Group className="mb-3" controlId="mobile_no">
                  <Form.Label>Mobile No</Form.Label>
                  <Form.Control
                    type="name"
                    required
                    name="mobile_no"
                    value={formData.mobile_no}
                    onChange={handleChange}
                  />
                </Form.Group>
              </div>
            </div>
            <div className="row">
              <div className="col">
                <Form.Group className="mb-3" controlId="firm_name">
                  <Form.Label>Firm Name</Form.Label>
                  <Form.Control
                    type="name"
                    required
                    name="firm_name"
                    value={formData.firm_name}
                    onChange={handleChange}
                  />
                </Form.Group>
              </div>
              <div className="col">
                <Form.Group className="mb-3" controlId="plan">
                  <Form.Label>Plan</Form.Label>
                  <Form.Select
                    value={formData.plan}
                    name="plan"
                    onChange={handleChange}
                  >
                    <option value="Hegan ERP BASIC">Hegan ERP BASIC</option>
                    <option value="Allopathic medicine">
                      Allopathic medicine
                    </option>
                  </Form.Select>
                </Form.Group>
              </div>
            </div>{" "}
            <div className="row">
              <div className="col">
                <Form.Group className="mb-3" controlId="address">
                  <Form.Label>Address</Form.Label>
                  <Form.Control
                    type="name"
                    required
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                  />
                </Form.Group>
              </div>
              <div className="col">
                <Form.Group className="mb-3" controlId="state">
                  <Form.Label>State</Form.Label>
                  <Form.Select
                    value={selectedOptionState}
                    name="state"
                    onChange={handleOptionChangeState}
                  >
                    {optionsState?.map((option1) => (
                      <option key={option1.value} value={option1.value}>
                        {option1.label}
                      </option>
                    ))}
                  </Form.Select>
                </Form.Group>
              </div>
            </div>{" "}
            <div className="row">
              <div className="col">
                <Form.Group className="mb-3" controlId="pin_code">
                  <Form.Label>Pin Code</Form.Label>
                  <Form.Select
                    value={formData.pin_code}
                    name="pin_code"
                    onChange={handleChange}
                  >
                    <option value="123456">123456</option>
                    <option value="789654">789654</option>
                  </Form.Select>
                </Form.Group>
              </div>
              <div className="col">
                <Form.Group className="mb-3" controlId="gst_no">
                  <Form.Label>GST No</Form.Label>
                  <Form.Control
                    type="name"
                    required
                    name="gst_no"
                    value={formData.gst_no}
                    onChange={handleChange}
                  />
                </Form.Group>
              </div>
            </div>
            <span>
              <h5>Categories</h5>
              <Col>
                <Form.Group controlId="checkbox">
                  <div className="row">
                    <div className="col">
                      <Form.Check
                        type="checkbox"
                        label="Allopathic"
                        name="allopathic"
                        checked={checkboxValues.allopathic}
                        onChange={handleCheckboxChange}
                      />
                    </div>
                    <div className="col">
                      <Form.Check
                        type="checkbox"
                        label="Generic"
                        name="generic"
                        checked={checkboxValues.generic}
                        onChange={handleCheckboxChange}
                      />
                    </div>
                  </div>
                  <div className="row">
                    <div className="col">
                      <Form.Check
                        type="checkbox"
                        label="Surgical & Medical Equipment"
                        name="surgical"
                        checked={checkboxValues.surgical}
                        onChange={handleCheckboxChange}
                      />
                    </div>
                    <div className="col">
                      <Form.Check
                        type="checkbox"
                        label="OTC"
                        name="otc"
                        checked={checkboxValues.otc}
                        onChange={handleCheckboxChange}
                      />
                    </div>
                  </div>
                  <div className="row">
                    <div className="col">
                      <Form.Check
                        type="checkbox"
                        label="Ayurvedic"
                        name="ayurvedic"
                        checked={checkboxValues.ayurvedic}
                        onChange={handleCheckboxChange}
                      />
                    </div>
                    <div className="col">
                      <Form.Check
                        type="checkbox"
                        label="Veterinary"
                        name="veterinary"
                        checked={checkboxValues.veterinary}
                        onChange={handleCheckboxChange}
                      />
                    </div>
                  </div>
                </Form.Group>
                <div className="row">
                  <div className="col">
                    <Form.Group className="mb-3" controlId="dl_no_1">
                      <Form.Label>DL NO 1</Form.Label>
                      <Form.Control
                        type="name"
                        required
                        name="dl_no_1"
                        value={formData.dl_no_1}
                        onChange={handleChange}
                      />
                    </Form.Group>
                  </div>{" "}
                  <div className="col">
                    <Form.Group className="mb-3" controlId="dl_no_2">
                      <Form.Label>DL NO 2</Form.Label>
                      <Form.Control
                        type="name"
                        required
                        name="dl_no_2"
                        value={formData.dl_no_2}
                        onChange={handleChange}
                      />
                    </Form.Group>
                  </div>
                </div>{" "}
                <div className="row">
                  <div className="col">
                    <Form.Group className="mb-3" controlId="fassai_no">
                      <Form.Label>FSSAI NO</Form.Label>
                      <Form.Control
                        type="name"
                        required
                        name="fassai_no"
                        value={formData.fassai_no}
                        onChange={handleChange}
                      />
                    </Form.Group>
                  </div>
                  <div className="col"></div>
                </div>
              </Col>
            </span>
            <span>
              <h5>Register as</h5>
              <div className="row">
                <div className="col">
                  <Form.Check
                    type="radio"
                    name="registration"
                    value="manufacturer"
                    label="Manufacturer"
                    checked={selectedOption === "manufacturer"}
                    onChange={handleOptionChange}
                  />
                </div>
                <div className="col">
                  <Form.Check
                    type="radio"
                    name="registration"
                    value="distributor"
                    label="Distributor"
                    checked={selectedOption === "distributor"}
                    onChange={handleOptionChange}
                  />
                </div>
                <div className="col">
                  <Form.Check
                    type="radio"
                    name="registration"
                    value="wholesaler"
                    label="Wholesaler"
                    checked={selectedOption === "wholesaler"}
                    onChange={handleOptionChange}
                  />
                </div>
                <div className="col">
                  <Form.Check
                    type="radio"
                    name="registration"
                    value="retailer"
                    label="Retailer"
                    checked={selectedOption === "retailer"}
                    onChange={handleOptionChange}
                  />
                </div>{" "}
                <div className="col">
                  <Form.Check
                    type="radio"
                    name="registration"
                    value="hospital"
                    label="Hospital"
                    checked={selectedOption === "hospital"}
                    onChange={handleOptionChange}
                  />
                </div>
              </div>
            </span>
            <span>
              <h3>Bank Details</h3>
              <div className="row">
                <div className="col">
                  <Form.Group className="mb-3" controlId="account_name">
                    <Form.Label>Account Name</Form.Label>
                    <Form.Control
                      type="name"
                      required
                      name="account_name"
                      value={formData.account_name}
                      onChange={handleChange}
                    />
                  </Form.Group>
                </div>
                <div className="col">
                  <Form.Group className="mb-3" controlId="account_no">
                    <Form.Label>Account No</Form.Label>
                    <Form.Control
                      type="number"
                      required
                      name="account_no"
                      value={formData.account_no}
                      onChange={handleChange}
                    />
                  </Form.Group>
                </div>
              </div>{" "}
              <div className="row">
                <div className="col">
                  <Form.Group className="mb-3" controlId="IFSC_Code">
                    <Form.Label>IFSC Code</Form.Label>
                    <Form.Control
                      type="name"
                      required
                      name="IFSC_Code"
                      value={formData.IFSC_Code}
                      onChange={handleChange}
                    />
                  </Form.Group>
                </div>
                <div className="col">
                  <Form.Group className="mb-3" controlId="branch">
                    <Form.Label>Branch</Form.Label>
                    <Form.Control
                      type="name"
                      required
                      name="branch"
                      value={formData.branch}
                      onChange={handleChange}
                    />
                  </Form.Group>
                </div>
              </div>
              <Form.Group controlId="file-upload" className="mb-3">
                <Form.Label>Upload Signature</Form.Label>
                <Form.Control
                  type="file"
                  accept=".jpg,.png,.pdf"
                  onChange={handleFileUpload}
                />
              </Form.Group>
            </span>
            <Form.Check
              inline
              label="Please tick the box to accept our Terms & Conditions and Privacy Policy"
              name="privacy"
              type="checkbox"
              checked={checkboxValues.privacy}
              onChange={handleCheckboxChange}
              required
            />
            <div className="mt-3">
              <Button variant="primary" type="submit">
                Register
              </Button>
            </div>
          </Form>
        </Row>
      </Container>
    </div>
  );
};

export default Register;
