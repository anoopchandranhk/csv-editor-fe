/** @jsxImportSource @emotion/react */
'use client';

import { css } from '@emotion/react';
import styled from '@emotion/styled';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Button from '@/components/Button';
import FileUploadButton from '@/components/FileUploadButton';

// const Button = styled.button`
//   padding: 10px 20px;
//   background-color: #0070f3;
//   border: none;
//   border-radius: 5px;
//   color: white;
//   cursor: pointer;
//   &:hover {
//     background-color: #0056b3;
//   }
// `;

const Header = styled.h1`
  color: black;
  font-family: Arial;
  font-size: 1.2rem;
  letter-spacing: 1;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-center;
  padding: 2rem;
`;

const CsvList = styled.div`
  flex: 0 0 auto;
  flex-direction: column;
  min-width: 50%;
  border: 1px solid #aaa;
  border-radius: 2px;
  padding: 1rem;
`;
const CsvFileEdit = styled.div`
  border: 1px solid #aaa;
  border-radius: 2px;
  padding: 1rem;
`;

const CsvFileEditCss = {
  self: css({
    backgroundColor: 'white',
    border: '1px solid #eee',
    borderRadius: '0.5rem',
    padding: '1rem',
    display: 'flex',
    flexGrow: '1',
  }),

  title: css({
    fontSize: '1.25rem',
    flexGrow: '1',
  }),
};

type CsvFile = {
  id: number;
  fileName: string;
  uploadDate: string;
  modifiedDate: string;
};
const CsvEditorPage = () => {
  // const [getApiRes, setGetApiRes] = useState<string>('');
  const [postApiRes, setPostApiRes] = useState<string>('');
  const [csvFiles, setCsvFiles] = useState<CsvFile[]>([]);

  // const posts = useSelector((state: any) => state.posts);
  // const dispatch = useDispatch();
  // Function to fetch CSV files from the API
  const fetchCsvFiles = async () => {
    try {
      const response = await fetch('http://localhost:8080/v1/api/csv-files');
      if (response.ok) {
        const data: CsvFile[] = await response.json();
        setCsvFiles(data); // Update the state with the fetched data
      } else {
        throw new Error('Failed to fetch data');
      }
    } catch (error) {
      console.error('Error fetching CSV files:', error);
    }
  };

  const callPostApi = () => {
    fetch('http://localhost:8080/v1/api/add', { method: 'POST' })
      .then((response) => response.text())
      .then((data) => {
        setPostApiRes(data);
      });
  };

  // Use useEffect to fetch data when the component mounts
  useEffect(() => {
    fetchCsvFiles();
  }, []);

  return (
    <Container>
      <Header>Manage CSVs</Header>
      {/* <Button onClick={fetchCsvFiles}>List</Button> */}
      {/* <div>API Res: {getApiRes}</div> */}
      <CsvList>
        <div>
          <p>{csvFiles.length === 0 ? 'Start by uploading a file' : 'Click the edit button to edit a CSV'}</p>
          <div css={{ display: 'flex' }}>
            {csvFiles.map((file: CsvFile) => (
              <div css={CsvFileEditCss.self} key={file.id}>
                <div css={CsvFileEditCss.title}>{file.fileName}</div>
                <Button onClick={fetchCsvFiles}>Edit</Button>
              </div>
            ))}
          </div>
        </div>
        <Button onClick={callPostApi}>Upload CSV</Button>
        <FileUploadButton />
      </CsvList>
      <div>API Res: {postApiRes}</div>
      {/* {posts ? (
        posts.map((post: any) => (
          <div key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.description}</p>
          </div>
        ))
      ) : (
        <p>No posts found.</p>
      )} */}
      {/* Content can be added here */}
    </Container>
  );
};

export default CsvEditorPage;
