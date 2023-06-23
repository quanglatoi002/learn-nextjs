import { workApi } from '@/api-client';
import { MainLayout } from '@/components/layout';
import { WorkFilters, WorkList, WorkSkeleton } from '@/components/work';
import { useWorkList } from '@/hooks';
import { ListParams } from '@/models';
import { Box, Button, Container, Skeleton, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';

export interface WorksPageProps {}

export default function WorksPage(props: WorksPageProps) {
    const [filters, setFilters] = useState<Partial<ListParams>>({ _page: 1, _limit: 3 });

    const { data, isLoading } = useWorkList({ params: filters });
    console.log({ data, isLoading });
    // useEffect(() => {
    //     (async () => {
    //         try {
    //             const workList = await workApi.getAll({ _page: 1 });
    //             console.log({ workList });
    //         } catch (error) {}
    //     })();
    // }, []);
    function handlePrevClick() {
        setFilters((prevFilters) => ({
            ...prevFilters,
            _page: (prevFilters?._page || 0) - 1,
        }));
    }
    function handleNextClick() {
        setFilters((prevFilters) => ({
            ...prevFilters,
            _page: (prevFilters?._page || 0) + 1,
        }));
    }
    return (
        <Box>
            <Container>
                <Box mb={4} mt={8}>
                    <Typography component="h1" variant="h3" fontWeight="bold">
                        Work
                    </Typography>
                </Box>
                <WorkFilters />
                <WorkList workList={data?.data || []} loading={isLoading} />
                <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                    <Button onClick={handlePrevClick} variant="contained">
                        Prev Page
                    </Button>
                    <Button onClick={handleNextClick} variant="contained">
                        Next Page
                    </Button>
                </Box>
            </Container>
        </Box>
    );
}
WorksPage.Layout = MainLayout;

export async function getStaticProps() {
    console.log('get static props');
    // const workList = await getWorkList();
    return {
        props: {},
    };
}
