import PatientReport from '../Models/PatientReport';
import { Request, Response } from 'express';
import User from '../Models/User'; 
import cloudinary from 'cloudinary';

cloudinary.v2.config({
    cloud_name: 'dtpuvzwyu',
    api_key: '443257453111698',
    api_secret: 'G_tLJ1hpiFytfIIhQY9Su9ZnQZw',
});

// Route handler to get patient reports by doctorId
export const getReportsByDoctorId = async (req: Request, res: Response) => {
    try {
        const { doctorId } = req.params;
        
        const doctor = await User.findByPk(doctorId);
        if (!doctor) {
            return res.status(404).json({ success: false, error: 'Doctor not found' });
        }
       
        const patientReports = await PatientReport.findAll({ where: { doctorId } });
        
        res.status(200).json({ success: true, data: patientReports });
    } catch (error) {
        console.error('Error fetching patient reports by doctorId:', error);
        res.status(500).json({ success: false, error: 'Internal server error' });
    }
};

// Route handler to get patient reports by patientId
export const getReportsByPatientId = async (req: Request, res: Response) => {
    try {
        const { patientId } = req.params;
        
        const patient = await User.findByPk(patientId);
        if (!patient) {
            return res.status(404).json({ success: false, error: 'Patient not found' });
        }
      
        const patientReports = await PatientReport.findAll({ where: { patientId } });
        
        res.status(200).json({ success: true, data: patientReports });
    } catch (error) {
        console.error('Error fetching patient reports by patientId:', error);
        res.status(500).json({ success: false, error: 'Internal server error' });
    }
};

export const createPatientReport = async (req: Request, res: Response) => {
    try {
        const { doctorId, patientId, subject, mode, summary } = req.body;

        const patient = await User.findByPk(patientId);
        if (!patient) {
            return res.status(404).json({ success: false, error: 'Patient not found' });
        }

        const doctor = await User.findByPk(doctorId);
        if (!doctor) {
            return res.status(404).json({ success: false, error: 'Doctor not found' });
        }

        if (!summary && !req.file) {
            return res.status(400).json({ success: false, error: 'Summary or prescription photo is required' });
        }


        let prescriptionPhotoUrl: string | null = null;
        if (req.file && req.file.path) {
            const uploadedPhoto = await cloudinary.v2.uploader.upload(req.file.path);
            prescriptionPhotoUrl = uploadedPhoto.secure_url;
        }

        // Create patient report
        const patientReport = await PatientReport.create({
            doctorId,
            patientId,
            subject,
            mode,
            summary,
            prescriptionWritten: summary ? summary : null,
            prescriptionPhoto: prescriptionPhotoUrl,
        });

        res.status(201).json({ success: true, data: patientReport });
    } catch (error) {
        console.error('Error creating patient report:', error);
        res.status(500).json({ success: false, error: 'Internal server error' });
    }
};


// Update PatientReport
export const updatePatientReport = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const { doctorId, patientId, subject, mode, summary, prescriptionWritten, prescriptionPhoto } = req.body;

        const existingReport = await PatientReport.findByPk(id);
        if (!existingReport) {
            return res.status(404).json({ success: false, error: 'Patient report not found' });
        }

        const [updatedRows] = await PatientReport.update(
            {
                doctorId,
                patientId,
                subject,
                mode,
                summary,
                prescriptionWritten,
                prescriptionPhoto,
            },
            {
                where: { id },
            }
        );

        if (updatedRows > 0) {
            const updatedPatientReport = await PatientReport.findByPk(id);
            return res.status(200).json({ success: true, data: updatedPatientReport });
        } else {
            return res.status(404).json({ success: false, error: 'Patient report not found' });
        }
    } catch (error) {
        console.error('Error updating patient report:', error);
        return res.status(500).json({ success: false, error: 'Internal server error' });
    }
};

// Delete PatientReport
export const deletePatientReport = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const deleted = await PatientReport.destroy({
            where: { id },
        });
        if (deleted) {
            res.status(204).send();
        } else {
            res.status(404).json({ success: false, error: 'Patient report not found' });
        }
    } catch (error) {
        console.error('Error deleting patient report:', error);
        res.status(500).json({ success: false, error: 'Internal server error' });
    }
};
