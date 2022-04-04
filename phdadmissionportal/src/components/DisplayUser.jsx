import { Table, TableHead, TableBody, TableContainer, TableRow, Paper, styled, TableCell, tableCellClasses } from '@mui/material'
import React from 'react';
import EditIcon from '@mui/icons-material/Edit';
import DeleteOutlineTwoToneIcon from '@mui/icons-material/DeleteOutlineTwoTone';
import ArticleIcon from '@mui/icons-material/Article';
import { useNavigate } from 'react-router-dom';
import '../styles/DisplayUser.css'

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 14,
        background:'transparent',
    },
}));

// const StyledTableRow = styled(TableRow)(({ theme }) => ({
//     '&:nth-of-type(odd)': {
//         backgroundColor: theme.palette.action.hover,
//     },
//     // hide last border
//     '&:last-child td, &:last-child th': {
//         border: 0,
//     },
// }));

export default function DisplayUser(props) {
    const navigate = useNavigate();
    console.log(props.courses)
    const editStudent = (id) => {
        console.log(id);
        navigate(`/admin/editStudent/${id}`);
    }
    
    const DeleteHandler =(id)=>{
        props.deleteStudent(id);
    }
    
    const viewStudent = (id) => {
        console.log(id);
        navigate(`/admin/viewDetailsStudent/${id}`);

    }



    return (
        <div>
            {
                props.courses.map((course)=>{
                    
                        <div class="card" key={course.id} >
                            
                <h2>course.CourseName</h2>
                <p class="price">{course.CourseId}</p>
                <p class="price">{course.InstituteId}</p>
                <p class="price">{course.InstituteName}</p>
                <p class="price">{course.CourseDescription}</p>
                <p class="price">{course.AcademicYear}</p>
                <p class="price">{course.CourseDuration}</p>
                <p><button>edit Courses</button></p>
                <p><button>delete Courses</button></p>

            </div> 
                    
                })
            }
           
        </div>
    )
}
