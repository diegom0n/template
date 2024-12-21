interface TramiteIdPageProps {
    params: Promise<{ tramiteId: string }>;
};

const TramiteIdPage = async ({ params }: TramiteIdPageProps) => {
    const { tramiteId } = await params;

    return ( 
        <div>
            Tramite ID: {tramiteId}
        </div>
     );
}
 
export default TramiteIdPage;