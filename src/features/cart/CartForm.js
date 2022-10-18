import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setCurrentCart, selectCurrentCart } from './cartSlice';
import { 
    Modal,
    ModalHeader,
    ModalBody,
    FormGroup,
    Label,
    Button
} from 'reactstrap';
import { Formik, Field, Form } from 'formik';
import defaultAvatar from '../../app/assets/img/logo.jpg';