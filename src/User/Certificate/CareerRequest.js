import React, { Component } from 'react';
import './carrer.css';
import MiniNav from "../../Components/MiniNav" 
import ReactToPdf from "./reacttopdf"
import stepimg from "./이력step3.svg";
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import jsPDF from 'jspdf'

import { pdfjs } from 'react-pdf';
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

class CareerRequest extends Component {    
    generatePdf = () => {
        const Certificate = {
            Affiliation: "중앙대학교",
            CertificateType: "수료증",
            Curriculum: "차세대 보안리더 양성 프로그램의 교육과정 9기 수료",
            DocumentNumber: "21-176",
            From: "2020.07.01",
            IssuedDate: "2021.03.20",
            Name: "조현우",
            Representative: "한국정보기술연구원장 유준상",
            Service: "BoB",
            To: "2021.03.20",
            Track: "보안제품개발",
            }

        const CertificateJSON = JSON.stringify(Certificate)
        const parsedData = JSON.parse(CertificateJSON)


    var doc = new jsPDF('p', 'pt');
    doc.text(20, 20, parsedData.Affiliation)
    doc.setFont('helvetica')
    doc.text(20, 60, parsedData.Track)
    //doc.addPage() // this code creates new page in pdf document
    doc.setFont('helvetica')
    doc.text(20, 100, parsedData.Name)
    doc.save('sample-file.pdf') //filename 기관_이름_yyyymmdd 형식
    localStorage.setItem('pdf', doc);
    alert(localStorage.getItem('pdf'));
    }

    onClickBtn() {
        this.generatePdf();
    }

    render() {
        return (
            <div className="career">
                <MiniNav />
                <div className="header">
                    <Link to="/" style={{ textDecoration: 'none' }}>
                        <p className="bold">Sillock</p></Link>
                    <div className="head">
                    <ReactToPdf>
                        {({toPdf, targetRef}) =>  (
                            <div style={{width: 500, height: 500, background: 'red'}} onClick={toPdf} ref={targetRef}/>
                        )}
                    </ReactToPdf>

                        <p>내 조각정보 등록</p>
                        <p className="title">내 이력 등록하기</p>
                    </div>
                    <img src={stepimg} className="stepimg" alt="stepimg" />
                </div>
                <div className="car-content">
                    <div>
                        <p className="title2">증명요청</p>
                        <p className="txt2">선택하신 발행기관으로 내 이력 증명을 요청하시겠습니까?</p>
                    </div>
                    <tr>
                        <td>
                            <p className="txt3">선택한 발행기관 목록</p>
                            <div className="Cer-form2">
                            </div>
                        </td>
                        <td>
                            <p className="txt3">선택한 나의 이력 목록</p>
                            <div className="Cer-form2">
                            </div>
                        </td>
                    </tr>
                </div>
                <div className="buttons">
                    <Link to="/certificate/careerChoice" style={{ textDecoration: 'none' }}><Button variant="contained" color="primary" id="buttonsss">이전으로 </Button></Link>
                    <Button variant="contained" color="primary" id="buttonss" onClick={(e) => {this.onClickBtn()}}>요청하기 </Button>
                </div>
            </div>
        );
    }
}

export default CareerRequest;