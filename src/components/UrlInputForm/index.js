import { useEffect } from "react";
import { gql, useMutation } from "@apollo/client";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { addUrl } from "../../store/reducer";
import styles from "./UrlInputForm.module.scss";

const SHORTEN_URL = gql`
  mutation ShortenUrl($url: String!) {
    shorten_url(url: $url) {
      short_url {
        id
        url
        short_url
        clicks
      }
      operation_status {
        status
      }
    }
  }
`;

const validationSchema = Yup.object().shape({
  url: Yup.string()
    .matches(/^https?\:\/\/\w+\.\w+$/, { message: "not a URL" })
    .required("required")
});

const initialValues = {
  url: ""
};

function UrlInputForm() {
  const [shortenUrl, { data, loading, error }] = useMutation(SHORTEN_URL);

  const item = data?.shorten_url?.short_url;

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: (values, { resetForm }) => {
      shortenUrl({ variables: { url: values.url } });
      resetForm();
    }
  });

  const dispatch = useDispatch();

  useEffect(() => {
    if (item) {
      dispatch(addUrl(item));
    }
  }, [item]);

  return (
    <form className={styles.form} onSubmit={formik.handleSubmit}>
      <label htmlFor="url">Введите ссылку</label>
      <input
        id="url"
        type="text"
        value={formik.values.url}
        onChange={formik.handleChange}
      />
      <button type="submit">Сократить</button>
      {formik.errors.url && (
        <div className={styles.error}>Error: {formik.errors.url}</div>
      )}
    </form>
  );
}

export default UrlInputForm;
