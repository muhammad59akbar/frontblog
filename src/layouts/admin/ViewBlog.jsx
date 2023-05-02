import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import CardsAdmin from "../../components/admin/CardsAdmin";
import { MyaccBlog } from "../../features/AuthSlice";
import { PageTittle } from "../../TittleName";

const ViewBlog = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { isError } = useSelector((state) => state.authLogin);
  PageTittle("Detail Blog");

  useEffect(() => {
    dispatch(MyaccBlog());
  }, [dispatch]);

  useEffect(() => {
    if (isError) {
      navigate("/");
    }
  }, [isError, navigate]);

  return (
    <>
      <CardsAdmin />
    </>
  );
};

export default ViewBlog;
