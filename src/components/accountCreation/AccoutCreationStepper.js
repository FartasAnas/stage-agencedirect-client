import React, { useEffect, useState } from 'react'
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import StepContent from '@mui/material/StepContent';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import MenuItem from '@mui/material/MenuItem';
import CircularProgress from '@mui/material/CircularProgress';
import { TextField } from '@mui/material';
import { addEtudiant, addMarocainResident, getAllAgence } from '../../features/client/ClientSlice';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import "./accountCrationStyle.css"


const validEmail = (email) => {
    return email.match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};
const validPhoneNumber = (phone)=>{
    return phone.match(/(\+212|0)([ \-/]*)(\d[ \-/]*){9}/);
}

export default function AccoutCreationStepper({pack}) {
    const dispatch=useDispatch();
    const navigate=useNavigate();

    const convertBase64 = (file) => {
        return new Promise((resolve, reject) => {
            const fileReader = new FileReader();
            fileReader.readAsDataURL(file);
            fileReader.onload = () => { resolve(fileReader.result); };
            fileReader.onerror = (error) => {  reject(error); };
        });
    };

    const [email,setEmail]=useState('');
    const [prenom,setPrenom]=useState('');
    const [nom,setNom]=useState('');
    const [dateNaissance,setDateNaissance]=useState('');
    const [telephone,setTelephone]=useState("+212");
    const [cin,setCIN]=useState('');
    const [profession,setProfession]=useState('')
    const [adresse,setAdresse]=useState('')
    const [codePostale,setCodePostale]=useState('')
    const [ecole,setEcole]=useState('')
    const [agence,setAgence]=useState('')
    const [agenceList,setAgenceList]=useState('')
    const [cinRectoURL,setCinRectoURL]=useState('')
    const [cinVersoURL,setCinVersoURL]=useState('')
    const [selfieURL,setSelfieURL]=useState('')


    const handleEmailInput=(e)=>setEmail(e.target.value)
    const handlePrenomInput=(e)=>setPrenom(e.target.value)
    const handleNomInput=(e)=>setNom(e.target.value)
    const handleDateNaissanceInput=(e)=>{setDateNaissance(e.target?.value.split('-').reverse().join('/'))}
    const handlePhoneNumber=(e)=>setTelephone(e.target.value)
    const handleCINInput=(e)=>setCIN(e.target.value)
    const handleProfessionInput=(e)=>setProfession(e.target.value)
    const handleAdresseInput=(e)=>setAdresse(e.target.value)
    const handleCodePostaleInput=(e)=>setCodePostale(e.target.value)
    const handleEcoleInput=(e)=>setEcole(e.target.value)
    const handleAgenceInput=(e)=>setAgence(e.target.value)
    const uploadCinRectoURL = async (e) => {
        const file = e.target.files[0];
        const base64 = await convertBase64(file);
        setCinRectoURL(base64);
    };
    const uploadCinVersoURL = async (e) => {
        const file = e.target.files[0];
        const base64 = await convertBase64(file);
        setCinVersoURL(base64);
    };
    const uploadSelfieURL = async (e) => {
        const file = e.target.files[0];
        const base64 = await convertBase64(file);
        setSelfieURL(base64);
    };


    const ClientTypeChange= pack==="pack jeune" ? (
        <TextField 
            sx={{ width: 220 }}  id="standard-basic" label="Ecole" type="text" 
            variant="standard" onChange={handleEcoleInput} value={ecole} required
        />
    ) : (
        <TextField 
            sx={{ width: 220 }}  id="standard-basic" label="Profession" type="text" 
            variant="standard" onChange={handleProfessionInput} value={profession} required
        />
    )

    useEffect(()=>{
        const fetchData = async () => {
            const agenceData=await dispatch(getAllAgence()).unwrap();
            let agenceDataFilter=agenceData.filter(agence=>{
                return agence.nom !== "agence direct"
            })
            setAgenceList(agenceDataFilter)
        }
        fetchData();
    }, [])

    const handleTerminerInput= async (e)=>{
        if(pack==="pack jeune"){  
            try{
                const etudiantData=await dispatch(addEtudiant(
                    {email,prenom,nom,dateNaissance,telephone,cin,adresse,codePostale,ecole,agence:{nom:agence},pack:{nom:pack},cinRectoURL,cinVersoURL,selfieURL}
                    )).unwrap();
                navigate("/bienvenu",{state:{email}})
                setEmail('');setPrenom('');setNom('');setDateNaissance('');setTelephone('');
                setCIN('');setProfession('');setAdresse('');setCodePostale('');setEcole('');setAgence('');
            }catch(err){
                console.log(err)
                if(!err){
                    alert('No Server Response');
                }else if(err.message.includes('400')){
                    alert('Missing Info');
                }else if(err.message.includes('409')){
                    alert('Email or CIN Already Exist');
                }else{
                    alert('Add Client Failed');
                }
            }
        }
        else{
            try{
                const MarocainResidentData=await dispatch(addMarocainResident(
                    {email,prenom,nom,dateNaissance,telephone,cin,adresse,codePostale,profession,agence:{nom:agence},pack:{nom:pack},cinRectoURL,cinVersoURL,selfieURL}
                    )).unwrap();
                navigate("/bienvenu",{state:{email}})
                setEmail('');setPrenom('');setNom('');setDateNaissance('');setTelephone('');
                setCIN('');setProfession('');setAdresse('');setCodePostale('');setEcole('');setAgence('');
            }catch(err){
                console.log(err)
                if(!err){
                    alert('No Server Response');
                }else if(err.message.includes('400')){
                    alert('Missing Info');
                }else if(err.message.includes('409')){
                    alert('Email or CIN Already Exist');
                }else{
                    alert('Add Client Failed');
                }
            }
        }
    }



    const steps = [
    {
      label: 'Vérification de l’adresse mail',
      description: <> 
            <span>Veuillez saisir votre adresse email afin de créer votre espace personnel</span>
            <br/>
            <TextField id="standard-basic" label="Adresse email" type="Email" variant="standard" onChange={handleEmailInput} value={email} required/>
        </>,
    },
    {
      label: 'Mes Information',
      description:
      <>
        Veuillez compléter, vérifiér votre formulaire et charger vos pièces justificatives
        <br/><br/>

        <TextField sx={{ marginRight:'110px' , width: 220}} id="standard-basic" label="Prénom" type="text" variant="standard" onChange={handlePrenomInput} value={prenom} required/>
        <TextField sx={{ width: 220 }}  id="standard-basic" label="Nom" type="text" variant="standard" onChange={handleNomInput} value={nom} required/>
        <br/><br/>
        
        <TextField
            id="date" label="Date de naissance" type="date"
            sx={{ width: 220 }} onChange={handleDateNaissanceInput} 
            InputLabelProps={{ shrink: true, }} value={dateNaissance.split('/').reverse().join('-')}
        />
        <TextField id="standard-basic" sx={{ marginLeft:'110px', width: 220}}  label="N° de télèphone" type="text" variant="standard" onChange={handlePhoneNumber} value={telephone} required/>
        <br/><br/>

        <TextField sx={{ marginRight:'110px' , width: 220}} id="standard-basic" label="CIN" type="text" variant="standard" onChange={handleCINInput} value={cin} required/>
        {ClientTypeChange}
        <br/><br/>

        <TextField 
            sx={{ marginRight:'110px' , width: 220}} id="standard-basic" label="Adresse" type="text" 
            variant="standard" onChange={handleAdresseInput} value={adresse} required
        />
        <TextField 
            sx={{ width: 220 }}  id="standard-basic" label="CodePostale" type="text" variant="standard" 
            onChange={handleCodePostaleInput} value={codePostale} required
        />
        <br/><br/>
       </>,
    },
    {
      label: 'Mes pièces et mon Selfie check',
      description: <>
            Commencez par vous Indetifier
            <div className='photos-div'>
                <div className='container row'>
                    <div className='col rounded-start piece-border cin-text-area'>
                        <i className="fa-regular fa-address-card cin-icon"></i>
                        <h3 className='cin-text'>Chargez votre pièce d'identité (CIN)</h3>
                        <h4 className='cin-second-text'>Format JPG ou PNG et un maximum de 5mo</h4>
                    </div>
                    <div className='col rounded-end piece-border input-file-area '>
                        <div className='h-100 d-flex align-items-center row'>
                            
                            <div className="file-inputs input-margin" >
                                <input type="file" onChange={(e) => { uploadCinRectoURL(e);  }} /> 
                                <button className='row' style={ cinRectoURL ? {color:'rgb(46, 188, 52)'} : {color:'rgb(29, 142, 254)'}}>
                                    <i className="fa-solid fa-cloud-arrow-up btn-icon col"></i>
                                    <span className='col btn-txt'>Charger le coté recto</span>
                                </button>
                                 
                            </div>
                            <div className="file-inputs input-margin">
                                <input type="file" onChange={(e) => { uploadCinVersoURL(e);  }} />
                                <button className='row' style={ cinVersoURL ? {color:'rgb(46, 188, 52)'} : {color:'rgb(29, 142, 254)'}}>
                                    <i className="fa-solid fa-cloud-arrow-up btn-icon col"></i>
                                    <span className='col btn-txt'>Charger le coté verso</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='container row mt-2'>
                    <div className='col rounded-start piece-border cin-text-area'>
                        <i className="fa-solid fa-chalkboard-user cin-icon"></i>
                        <h3 className='cin-text'>Chargez votre photo (selfie)</h3>
                        <h4 className='cin-second-text'>Format JPG ou PNG et un maximum de 5mo</h4>
                    </div>
                    <div className='col rounded-end piece-border input-file-area '>
                        <div className='h-100 d-flex align-items-center row'>
                            <div className="file-inputs input-margin">
                                <input type="file" onChange={(e) => { uploadSelfieURL(e);  }}/>
                                <button className='row' style={ selfieURL ? {color:'rgb(46, 188, 52)'} : {color:'rgb(29, 142, 254)'}}>
                                    <i className="fa-solid fa-cloud-arrow-up btn-icon col"></i>
                                    <span className='col btn-txt'>Charger votre selfie</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
      </>,
    },
    {
      label: 'Mon Agence',
      description: <>
            Choisir Votre Agence
            <br/>
            <FormControl variant="standard" sx={{ width: 220 , mb:1 }}>
                <InputLabel id="agence">Agence</InputLabel>
                <Select labelId="agence" id="agence" value={agence} label="Agence" onChange={handleAgenceInput}>
                    {
                        !agenceList ?(
                            <MenuItem key={999}>
                                <CircularProgress color="inherit" />
                            </MenuItem>)
                        :(
                            agenceList.map(agence=>{
                                return <MenuItem key={agence?.id} id={agence?.id} value={agence?.nom}>{agence?.nom}</MenuItem>
                            })
                        )
                    }
                </Select>
            </FormControl>
      </>,
    },
  ];
    const [activeStep, setActiveStep] = useState(0);
    const handleNext = () => {
        if(activeStep=="0"){
            if(!validEmail(email)){ alert("wrong Email") }
            else{ setActiveStep((prevActiveStep) => prevActiveStep + 1); }
        }
        else if(activeStep=="1"){
            if(prenom===''|| nom ==='' || dateNaissance ==='' || telephone ==='' || cin ==='' || 
                (profession==='' && ecole==='') || adresse==='' || codePostale===''){
                alert("Empty Field")
            }
            else{
                if(!validPhoneNumber(telephone)){ alert("Wrong telephone") }
                else{  setActiveStep((prevActiveStep) => prevActiveStep + 1);  }
            }
        }
        else if(activeStep=="2"){
            if(cinRectoURL==='' || cinVersoURL==='' || selfieURL===''){ alert("Missing Document") }
            else{ setActiveStep((prevActiveStep) => prevActiveStep + 1);  }
        }
        else if(activeStep=="3"){
            if(!agence){ alert("Choisie une agence")}
            else{ setActiveStep((prevActiveStep) => prevActiveStep + 1); }
        }
        else{
            setActiveStep((prevActiveStep) => prevActiveStep + 1); 
        }
    };
    const handleBack = () => {
        console.log(activeStep);
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };    
    const handleReset = () => {
        setActiveStep(0);
    };
    
    return (
        <Box sx={{ maxWidth:"100%" , width:"100%"}}>
            <Stepper activeStep={activeStep} orientation="vertical">
                {steps.map((step, index) => (
                <Step key={step.label}>
                    <StepLabel optional={  index === 3 ? ( <Typography variant="caption">Last step</Typography> ) : null } >
                        {step.label}
                    </StepLabel>
                    <StepContent>
                        <Typography component={'div'}>{step.description}</Typography>
                        <Box sx={{ mb: 2 }}>
                            <div>
                                <Button variant="contained" onClick={handleNext} sx={{ mt: 1, mr: 1 }} >
                                    Suivant
                                </Button>
                                <Button disabled={index === 0} onClick={handleBack} sx={{ mt: 1, mr: 1 }}>
                                    Retour
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
                    <Button variant="contained" color="success" onClick={handleTerminerInput} sx={{ mt: 1, mr: 1 }} >
                        Terminer
                    </Button>
                    <Button onClick={handleReset} sx={{ mt: 1, mr: 1 }}>
                        Réinitialiser
                    </Button>
                </Paper>
            )}
        </Box>
    
    )
}
