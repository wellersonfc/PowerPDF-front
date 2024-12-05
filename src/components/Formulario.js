import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

const Formulario = ({ onSubmit }) => {
  const [fileName, setFileName] = useState("Selecione o PDF"); // Estado inicial do label

  const formik = useFormik({
    initialValues: {
      arquivo_pdf: "",
      nome_pdf: "",
    },
    validationSchema: Yup.object({
      arquivo_pdf: Yup.mixed()
        .required("O PDF é obrigatório")
        .test(
          "fileFormat",
          "O arquivo deve ser um PDF",
          (value) => value && value.type === "application/pdf"
        ),
      nome_pdf: Yup.string().required("O nome do PDF é obrigatório"),
    }),
    onSubmit: (values) => {
      onSubmit(values);
    },
  });

  const handleFileChange = (event) => {
    const file = event.currentTarget.files[0];
    if (file) {
      setFileName(`Arquivo selecionado: ${file.name}`); // Atualiza o label com o nome do arquivo
      formik.setFieldValue("arquivo_pdf", file);
    } else {
      setFileName("Selecione o PDF"); // Volta ao texto padrão se nenhum arquivo for selecionado
    }
  };

  return (
    <form onSubmit={formik.handleSubmit}>
      <div className="form-group-file">
        <label className="label" htmlFor="arquivo_pdf">
          <div className="input-label">{fileName}</div>
          <input
            id="arquivo_pdf"
            type="file"
            name="arquivo_pdf"
            accept="application/pdf"
            onChange={handleFileChange}
          />
        </label>
      </div>
      <div className="validacao">
        {formik.touched.arquivo_pdf && formik.errors.arquivo_pdf && (
          <div>{formik.errors.arquivo_pdf}</div>
        )}
      </div>

      <div className="form-group-text">
        <input
          id="nome_pdf"
          type="text"
          placeholder="Nome do PDF"
          name="nome_pdf"
          value={formik.values.nome_pdf}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
      </div>
      <div  className="validacao">
        {formik.touched.nome_pdf && formik.errors.nome_pdf && (
          <div>{formik.errors.nome_pdf}</div>
        )}
      </div>

      <div>
        <button type="submit" className="button-principal">Realizar o merge</button>
      </div>
    </form>
  );
};

export default Formulario;
